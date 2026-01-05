import { domReady } from './utils'
import { IJsonPatch } from 'mobx-state-tree'
import {
  FollowInstruction,
  GameContext,
  LindoAPI,
  LindoLogger,
  LindoTitleBar,
  RootStoreSnapshot,
  SaveCharacterImageArgs,
  UpdateProgress
} from '@lindo/shared'

;(async () => {
  await domReady()
})()

// Simple titlebar for web version
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash !== '') {
    return
  }
  
  const titleBar: LindoTitleBar = {
    updateTitle: (title: string) => {
      document.title = title
    },
    height: '0px' // No titlebar in web version
  }
  
  // Expose to window
  ;(window as any).titleBar = titleBar
})

// API base URL - will be set from server
const API_BASE = window.location.origin
let eventSource: EventSource | null = null
let patchCallbacks: Array<(patch: IJsonPatch) => void> = []
let clientId: string = ''

// Initialize EventSource for patches
function initPatchStream() {
  if (eventSource) {
    eventSource.close()
  }
  
  eventSource = new EventSource(`${API_BASE}/api/patch-stream?clientId=${clientId}`)
  
  eventSource.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data)
      if (data.type === 'connected') {
        clientId = data.clientId
      } else if (data.type === 'patch') {
        patchCallbacks.forEach(cb => cb(data.patch))
      }
    } catch (error) {
      console.error('Error parsing patch stream:', error)
    }
  }
  
  eventSource.onerror = (error) => {
    console.error('EventSource error:', error)
    // Reconnect after delay
    setTimeout(initPatchStream, 5000)
  }
}

// MOBX
const forwardPatchToMain = (patch: IJsonPatch): void => {
  fetch(`${API_BASE}/api/patch`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch)
  }).catch(error => {
    console.error('Error sending patch:', error)
  })
}

const fetchInitialStateAsync = async (): Promise<RootStoreSnapshot> => {
  const response = await fetch(`${API_BASE}/api/state`)
  return response.json()
}

const subscribeToIPCPatch = (callback: (patch: IJsonPatch) => void): (() => void) => {
  patchCallbacks.push(callback)
  if (!eventSource) {
    initPatchStream()
  }
  
  return () => {
    patchCallbacks = patchCallbacks.filter(cb => cb !== callback)
    if (patchCallbacks.length === 0 && eventSource) {
      eventSource.close()
      eventSource = null
    }
  }
}

const resetStore = (): void => {
  fetch(`${API_BASE}/api/reset-store`, { method: 'POST' }).catch(console.error)
}

// Hotkeys - simplified for web (would need keyboard event handling)
const subscribeToNewTab = (callback: () => void): (() => void) => {
  const handler = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 't') {
      e.preventDefault()
      callback()
    }
  }
  window.addEventListener('keydown', handler)
  return () => window.removeEventListener('keydown', handler)
}

const subscribeToSelectTab = (callback: (tabIndex: number) => void): (() => void) => {
  const handler = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key >= '1' && e.key <= '9') {
      e.preventDefault()
      callback(parseInt(e.key) - 1)
    }
  }
  window.addEventListener('keydown', handler)
  return () => window.removeEventListener('keydown', handler)
}

const subscribeToNextTab = (callback: () => void): (() => void) => {
  const handler = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'PageDown') {
      e.preventDefault()
      callback()
    }
  }
  window.addEventListener('keydown', handler)
  return () => window.removeEventListener('keydown', handler)
}

const subscribeToPrevTab = (callback: () => void): (() => void) => {
  const handler = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'PageUp') {
      e.preventDefault()
      callback()
    }
  }
  window.addEventListener('keydown', handler)
  return () => window.removeEventListener('keydown', handler)
}

const subscribeToCloseTab = (callback: () => void): (() => void) => {
  const handler = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'w') {
      e.preventDefault()
      callback()
    }
  }
  window.addEventListener('keydown', handler)
  return () => window.removeEventListener('keydown', handler)
}

// Updater - simplified for web
const subscribeToUpdateProgress = (callback: (updateProgress: UpdateProgress) => void): (() => void) => {
  // In web version, updates would be handled differently
  // For now, just return a no-op unsubscribe function
  return () => {}
}

// Context
const fetchGameContext = async (): Promise<GameContext> => {
  const response = await fetch(`${API_BASE}/api/game-context?windowId=${Date.now()}`)
  return response.json()
}

const fetchGameInfo = async (context: string): Promise<boolean> => {
  const response = await fetch(`${API_BASE}/api/game-info`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: context
  })
  return response.json()
}

const appReadyToShow = () => {
  // No-op for web version
}

// Window - simplified for web
const openOptionWindow = (): void => {
  // In web version, navigate to options route
  window.location.hash = '#/option'
}

const focusCurrentWindow = (): void => {
  window.focus()
}

const closeOptionWindow = (): void => {
  if (window.location.hash === '#/option') {
    window.location.hash = ''
  }
}

const setAudioMuteWindow = (value: boolean): void => {
  fetch(`${API_BASE}/api/audio-mute`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value })
  }).catch(console.error)
}

// Multi account
const saveMasterPassword = async (masterPassword: string): Promise<void> => {
  await fetch(`${API_BASE}/api/multi-account/save-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: masterPassword })
  })
}

const changeMasterPassword = async (masterPassword: string, oldPassword: string): Promise<boolean> => {
  const response = await fetch(`${API_BASE}/api/multi-account/change-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ masterPassword, oldPassword })
  })
  return response.json()
}

const removeMasterPassword = async (): Promise<void> => {
  await fetch(`${API_BASE}/api/multi-account/remove-password`, {
    method: 'POST'
  })
}

const encryptCharacterPassword = async (characterPassword: string): Promise<string> => {
  const response = await fetch(`${API_BASE}/api/multi-account/encrypt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: characterPassword })
  })
  const data = await response.json()
  return data.encrypted
}

const decryptCharacterPassword = async (encryptedCharacterPassword: string): Promise<string> => {
  const response = await fetch(`${API_BASE}/api/multi-account/decrypt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ encrypted: encryptedCharacterPassword })
  })
  const data = await response.json()
  return data.decrypted
}

const unlockApplication = async (masterPassword: string): Promise<boolean> => {
  const response = await fetch(`${API_BASE}/api/multi-account/unlock`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: masterPassword })
  })
  const data = await response.json()
  return data.success
}

const isMasterPasswordConfigured = (): Promise<boolean> => {
  return fetch(`${API_BASE}/api/multi-account/is-configured`)
    .then(res => res.json())
    .then(data => data.configured)
}

const saveCharacterImage = (args: SaveCharacterImageArgs) => {
  fetch(`${API_BASE}/api/character-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(args)
  }).catch(console.error)
}

const closeUnlockWindow = () => {
  if (window.location.hash === '#/unlock') {
    window.location.hash = ''
  }
}

const selectTeamToConnect = (teamId: string) => {
  fetch(`${API_BASE}/api/multi-account/select-team`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ teamId })
  }).catch(console.error)
}

// Auto group
const subscribeToAutoGroupPathInstruction = (callback: (instruction: FollowInstruction) => void): (() => void) => {
  // Would need WebSocket or EventSource for real-time updates
  // For now, return no-op
  return () => {}
}

const sendAutoGroupPathInstruction = (instruction: FollowInstruction) => {
  fetch(`${API_BASE}/api/auto-group`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(instruction)
  }).catch(console.error)
}

// options
const resetGameData = () => {
  fetch(`${API_BASE}/api/reset-game-data`, { method: 'POST' }).catch(console.error)
}

const clearCache = () => {
  fetch(`${API_BASE}/api/clear-cache`, { method: 'POST' })
    .then(() => {
      alert('Cache cleared. Please refresh your browser.')
    })
    .catch(console.error)
}

const logger: LindoLogger = {
  debug: (...params: unknown[]) => {
    fetch(`${API_BASE}/api/log`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level: 'debug', params })
    }).catch(() => {})
    return console.debug.bind(console, ...params)
  },
  info: (...params: unknown[]) => {
    fetch(`${API_BASE}/api/log`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level: 'info', params })
    }).catch(() => {})
    return console.info.bind(console, ...params)
  },
  warn: (...params: unknown[]) => {
    fetch(`${API_BASE}/api/log`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level: 'warn', params })
    }).catch(() => {})
    return console.warn.bind(console, ...params)
  },
  error: (...params: unknown[]) => {
    fetch(`${API_BASE}/api/log`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level: 'error', params })
    }).catch(() => {})
    return console.error.bind(console, ...params)
  }
}

const lindoApi: LindoAPI = {
  fetchInitialStateAsync,
  resetStore,
  forwardPatchToMain,
  subscribeToIPCPatch,
  subscribeToNewTab,
  subscribeToSelectTab,
  subscribeToNextTab,
  subscribeToPrevTab,
  subscribeToCloseTab,
  subscribeToUpdateProgress,
  fetchGameContext,
  fetchGameInfo,
  appReadyToShow,
  openOptionWindow,
  focusCurrentWindow,
  closeOptionWindow,
  setAudioMuteWindow,
  saveMasterPassword,
  isMasterPasswordConfigured,
  saveCharacterImage,
  unlockApplication,
  closeUnlockWindow,
  selectTeamToConnect,
  encryptCharacterPassword,
  decryptCharacterPassword,
  changeMasterPassword,
  removeMasterPassword,
  subscribeToAutoGroupPathInstruction,
  sendAutoGroupPathInstruction,
  resetGameData,
  clearCache,
  logger
}

// Expose to window
;(window as any).lindoAPI = lindoApi
