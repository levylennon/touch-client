import crypto from 'crypto'
import userAgents from './user-agents.json'
import fs from 'fs-extra'
import path from 'path'

interface UserAgentStore {
  userAgent: {
    ua: string
    maxAge: string
  }
}

const STORAGE_PATH = path.join(process.cwd(), 'appData/storage/')
const USER_AGENT_FILE = path.join(STORAGE_PATH, 'user-agent.json')

const _getStore = (): UserAgentStore => {
  try {
    if (fs.existsSync(USER_AGENT_FILE)) {
      return JSON.parse(fs.readFileSync(USER_AGENT_FILE, 'utf-8'))
    }
  } catch (error) {
    // Ignore
  }
  return { userAgent: { ua: '', maxAge: '' } }
}

const _setStore = (data: Partial<UserAgentStore>) => {
  try {
    fs.mkdirSync(STORAGE_PATH, { recursive: true })
    const existing = _getStore()
    const updated = { ...existing, ...data }
    fs.writeFileSync(USER_AGENT_FILE, JSON.stringify(updated, null, 2))
  } catch (error) {
    // Ignore
  }
}

const _getUA = (): string => {
  const maxIndex = userAgents.length - 1
  const index = crypto.randomInt(0, maxIndex)
  return userAgents[index]
}

export const generateUserArgent = async (appVersion?: string): Promise<string> => {
  const now = new Date()
  const store = _getStore()

  let ua: string
  if (!store.userAgent?.ua || new Date(store.userAgent.maxAge) < now) {
    ua = _getUA()

    const expireDay = crypto.randomInt(10, 360)
    const maxAge = new Date(now.setDate(now.getDate() + expireDay)).toString()

    _setStore({
      userAgent: {
        ua,
        maxAge
      }
    })
  } else {
    ua = store.userAgent.ua
  }

  return 'DOFUS Touch/1 CFNetwork/1498.0.2 Darwin/23.6.0'
  // return ua + ' DofusTouch Client ' + appVersion
}
