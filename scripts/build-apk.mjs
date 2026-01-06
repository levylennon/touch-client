import { execSync } from 'child_process'
import { existsSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT_DIR = join(__dirname, '..')

const isWindows = process.platform === 'win32'
const gradlewCommand = isWindows ? 'gradlew.bat' : './gradlew'

console.log('🚀 Iniciando build do APK Android...\n')

try {
  // Step 1: Build game
  console.log('📦 Passo 1/4: Construindo arquivos do jogo...')
  execSync('npm run build:game', { stdio: 'inherit', cwd: ROOT_DIR })
  console.log('✅ Jogo construído com sucesso!\n')

  // Step 2: Sync Capacitor
  console.log('🔄 Passo 2/4: Sincronizando com Capacitor...')
  execSync('npx cap sync', { stdio: 'inherit', cwd: ROOT_DIR })
  console.log('✅ Capacitor sincronizado!\n')

  // Step 3: Build APK
  console.log('🔨 Passo 3/4: Compilando APK (isso pode demorar alguns minutos)...')
  const androidDir = join(ROOT_DIR, 'android')
  execSync(`${gradlewCommand} clean assembleDebug`, { 
    stdio: 'inherit', 
    cwd: androidDir 
  })
  console.log('✅ APK compilado com sucesso!\n')

  // Step 4: Show result
  const apkPath = join(androidDir, 'app/build/outputs/apk/debug/app-debug.apk')
  if (existsSync(apkPath)) {
    console.log('🎉 APK gerado com sucesso!')
    console.log(`📱 Localização: ${apkPath}`)
    console.log('\n💡 Você pode instalar o APK no seu dispositivo Android ou emulador.')
  } else {
    console.warn('⚠️  APK não encontrado no caminho esperado.')
    console.log('   Verifique os logs acima para erros.')
  }
} catch (error) {
  console.error('\n❌ Erro durante o build do APK:')
  console.error(error.message)
  process.exit(1)
}
