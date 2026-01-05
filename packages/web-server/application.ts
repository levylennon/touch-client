import {
  GameContext,
  RootStore,
  SaveCharacterImageArgs,
  GameTeamWindow,
  GameTeam,
  LANGUAGE_KEYS,
  IPCEvents
} from '@lindo/shared'
import { Express, Request, Response } from 'express'
import { AddressInfo } from 'net'
import { observe } from 'mobx'
import { IJsonPatch } from 'mobx-state-tree'
import { getSnapshot } from 'mobx-state-tree'
import { GAME_PATH, CHARACTER_IMAGES_PATH, APP_PATH, LINDO_API } from './constants'
import fs from 'fs-extra'
import path from 'path'
import axios from 'axios'
import { logger } from './logger'
import { Locales } from '@lindo/i18n'
import { platform } from 'os'
import { MultiAccount } from './multi-account'
import { runUpdater } from './updater'
import { I18n } from './utils'

export class Application {
  private static _instance: Application
  private readonly _multiAccount: MultiAccount
  private readonly _i18n: I18n
  private readonly _hash: string
  private readonly _port: number
  private readonly _app: Express
  private _patches: Map<string, IJsonPatch[]> = new Map()

  static async init(rootStore: RootStore, app: Express, hash: string, port: number) {
    if (Application._instance) {
      throw new Error('Application already initialized')
    }

    Application._instance = new Application(rootStore, app, hash, port)
  }

  static get instance(): Application {
    if (!Application._instance) {
      throw new Error('Application not initialized')
    }
    return Application._instance
  }

  private constructor(
    private _rootStore: RootStore,
    app: Express,
    hash: string,
    port: number
  ) {
    this._app = app
    this._multiAccount = new MultiAccount(this._rootStore)
    this._i18n = new I18n(this._rootStore)
    this._hash = hash
    this._port = port
  }

  async run() {
    // Setup API routes
    this._setupAPIRoutes()

    // Run updater
    await runUpdater(this._rootStore, this._i18n)

    // Set default language
    if (!this._rootStore.appStore._language) {
      const userLang = 'en' as Locales // Default to English for web
      if (LANGUAGE_KEYS.includes(userLang)) {
        this._rootStore.appStore.setLanguageKey(userLang)
      }
    }

    // Observe audio mute changes
    observe(
      this._rootStore.optionStore.window,
      'audioMuted',
      () => {
        // Broadcast audio mute state to all clients
        this._broadcastPatch({
          op: 'replace',
          path: '/optionStore/window/audioMuted',
          value: this._rootStore.optionStore.window.audioMuted
        })
      },
      true
    )
  }

  private _setupAPIRoutes() {
    // Get initial state
    this._app.get('/api/state', (req: Request, res: Response) => {
      const snapshot = getSnapshot(this._rootStore as any)
      res.json(snapshot)
    })

    // Apply patch
    this._app.post('/api/patch', (req: Request, res: Response) => {
      const patch: IJsonPatch = req.body
      try {
        // Apply patch to store
        const { applyPatch } = require('mobx-state-tree')
        applyPatch(this._rootStore, patch)
        
        // Broadcast to all clients
        this._broadcastPatch(patch)
        
        res.json({ success: true })
      } catch (error) {
        logger.error('Error applying patch:', error)
        res.status(500).json({ error: 'Failed to apply patch' })
      }
    })

    // Subscribe to patches (SSE - Server-Sent Events)
    this._app.get('/api/patch-stream', (req: Request, res: Response) => {
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Cache-Control', 'no-cache')
      res.setHeader('Connection', 'keep-alive')

      const clientId = req.query.clientId as string || crypto.randomUUID()
      this._patches.set(clientId, [])

      req.on('close', () => {
        this._patches.delete(clientId)
      })

      // Send initial connection message
      res.write(`data: ${JSON.stringify({ type: 'connected', clientId })}\n\n`)

      // Keep connection alive
      const keepAlive = setInterval(() => {
        res.write(': keepalive\n\n')
      }, 30000)

      req.on('close', () => {
        clearInterval(keepAlive)
      })
    })

    // Get game context
    this._app.get('/api/game-context', (req: Request, res: Response) => {
      const windowId = req.query.windowId ? parseInt(req.query.windowId as string) : 0
      
      // Use the request origin (from Vite proxy) or fallback to localhost
      // This ensures the game iframe uses the same origin as the renderer
      const origin = req.get('origin') || req.get('referer')?.split('/').slice(0, 3).join('/') || `http://localhost:${this._port}`
      
      const context: GameContext = {
        // Use the same origin as the request so iframe and parent are same-origin
        gameSrc: `${origin}/game/index.html?delayed=true`,
        characterImagesSrc: `${origin}/character-images/`,
        changeLogSrc: `${origin}/changelog`,
        windowId: windowId,
        multiAccount: undefined, // Will be set based on request
        hash: this._hash,
        platform: platform()
      }
      
      res.json(context)
    })

    // Fetch game info
    this._app.post('/api/game-info', async (req: Request, res: Response) => {
      try {
        const response = await axios.post(LINDO_API + 'stats/stats.php', req.body)
        res.json(!!response.data)
      } catch (error) {
        res.json(true) // Default to true on error
      }
    })

    // Save character image
    this._app.post('/api/character-image', (req: Request, res: Response) => {
      const { image, name }: SaveCharacterImageArgs = req.body
      const base64Data = image.replace(/^data:image\/png;base64,/, '')
      fs.mkdirSync(CHARACTER_IMAGES_PATH, { recursive: true })
      fs.writeFile(path.join(CHARACTER_IMAGES_PATH, `${name}.png`), base64Data, 'base64', (err) => {
        if (err) {
          logger.error(err)
          res.status(500).json({ error: 'Failed to save image' })
        } else {
          res.json({ success: true })
        }
      })
    })

    // Multi-account routes
    this._app.post('/api/multi-account/save-password', async (req: Request, res: Response) => {
      try {
        await this._multiAccount.saveMasterPassword(req.body.password)
        res.json({ success: true })
      } catch (error) {
        res.status(500).json({ error: 'Failed to save password' })
      }
    })

    this._app.post('/api/multi-account/unlock', async (req: Request, res: Response) => {
      try {
        const result = await this._multiAccount.unlock(req.body.password)
        res.json({ success: result })
      } catch (error) {
        res.status(500).json({ error: 'Failed to unlock' })
      }
    })

    this._app.get('/api/multi-account/is-configured', (req: Request, res: Response) => {
      res.json({ configured: this._multiAccount.isMasterPasswordConfigured() })
    })

    this._app.post('/api/multi-account/change-password', async (req: Request, res: Response) => {
      try {
        const result = await this._multiAccount.changeMasterPassword(req.body.masterPassword, req.body.oldPassword)
        res.json({ success: result })
      } catch (error) {
        res.status(500).json({ error: 'Failed to change password' })
      }
    })

    this._app.post('/api/multi-account/remove-password', async (req: Request, res: Response) => {
      try {
        await this._multiAccount.removeMasterPassword()
        res.json({ success: true })
      } catch (error) {
        res.status(500).json({ error: 'Failed to remove password' })
      }
    })

    this._app.post('/api/multi-account/encrypt', async (req: Request, res: Response) => {
      try {
        const encrypted = await this._multiAccount.encryptCharacterPassword(req.body.password)
        res.json({ encrypted })
      } catch (error) {
        res.status(500).json({ error: 'Failed to encrypt' })
      }
    })

    this._app.post('/api/multi-account/decrypt', async (req: Request, res: Response) => {
      try {
        const decrypted = await this._multiAccount.decryptCharacterPassword(req.body.encrypted)
        res.json({ decrypted })
      } catch (error) {
        res.status(500).json({ error: 'Failed to decrypt' })
      }
    })

    this._app.post('/api/multi-account/select-team', (req: Request, res: Response) => {
      // Handle team selection
      res.json({ success: true })
    })

    // Reset store
    this._app.post('/api/reset-store', (req: Request, res: Response) => {
      this._rootStore.reset()
      res.json({ success: true })
    })

    // Reset game data
    this._app.post('/api/reset-game-data', (req: Request, res: Response) => {
      fs.rmSync(GAME_PATH, { recursive: true, force: true })
      res.json({ success: true })
    })

    // Clear cache (web version - just acknowledge)
    this._app.post('/api/clear-cache', (req: Request, res: Response) => {
      res.json({ success: true, message: 'Cache cleared (refresh your browser)' })
    })

    // Audio mute
    this._app.post('/api/audio-mute', (req: Request, res: Response) => {
      this._rootStore.optionStore.window.setAudioMuted(req.body.value)
      res.json({ success: true })
    })

    // Logging
    this._app.post('/api/log', (req: Request, res: Response) => {
      const { level, params } = req.body
      const logMethod = logger[level as keyof typeof logger] as (...args: any[]) => void
      if (logMethod) {
        logMethod(...params)
      }
      res.json({ success: true })
    })

    // Auto group
    this._app.post('/api/auto-group', (req: Request, res: Response) => {
      // Handle auto group instructions
      res.json({ success: true })
    })
  }

  private _broadcastPatch(patch: IJsonPatch) {
    // Store patch for new connections
    this._patches.forEach((patches, clientId) => {
      patches.push(patch)
    })
  }

  processLoginCode(code: string) {
    // Handle login code from protocol handler
    logger.debug(`Received login code: ${'*'.repeat(code.length)}`)
    // This would need to be implemented based on how the game handles auth
  }
}
