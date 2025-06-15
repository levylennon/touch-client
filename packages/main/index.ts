import { app } from 'electron'
import { Application } from './application'
import { setupRootStore } from './store'
import { setupTitlebar } from 'custom-electron-titlebar/main'
import { logger } from './logger'
import { electronLocalshortcut } from '@hfelix/electron-localshortcut'
import { getCurrentKeyboardLayout, getKeyMap } from 'native-keymap'
import path from 'path'

// prevent chrome using cpu instead of the gpu
app.commandLine.appendSwitch('ignore-gpu-blacklist', 'true')

// prevent throttling when window is not focus
app.commandLine.appendSwitch('disable-site-isolation-trials')
app.commandLine.appendSwitch('disable-renderer-backgrounding')
app.commandLine.appendSwitch('disable-background-timer-throttling')

// more webgl and less black screen (default is probably 16, maybe...)
app.commandLine.appendSwitch('max-active-webgl-contexts', '32')

electronLocalshortcut.setKeyboardLayout(getCurrentKeyboardLayout(), getKeyMap())

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

// 📌 Registro do protocolo personalizado
const protocolName = 'dofustouch'

if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient(protocolName, process.execPath, [path.resolve(process.argv[1])])
  }
} else {
  app.setAsDefaultProtocolClient(protocolName)
}

// 📌 Função para processar a URL do protocolo
function handleProtocol(event: any, url: string) {
  event.preventDefault?.()
  try {
    const parsed = new URL(url)
    const code = parsed.searchParams.get('code')
    if (code && Application.instance) {
      logger.debug(`Received code via protocol: ${'*'.repeat(code.length)}`)
      Application.instance.processLoginCode(code)
    }
  } catch (error) {
    logger.error('Invalid protocol URL:', url, error)
  }
}

// macOS: recebe eventos quando o app já está aberto
if (process.platform === 'darwin') {
  app.on('open-url', handleProtocol)
}

// Windows/Linux: recebe a URL como argumento extra na 2ª instância
app.on('second-instance', (event, argv) => {
  const url = argv.find(arg => arg.startsWith(`${protocolName}://`))
  if (url) handleProtocol(event, url)
})

app.whenReady().then(async () => {
  logger.debug('App -> whenReady')
  setupTitlebar()
  const store = await setupRootStore()
  await Application.init(store)
  Application.instance.run()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
