import { RootStoreModel, RootStore, RootStoreSnapshot } from '@lindo/shared'
import hash from 'object-hash'
import { applyPatch, getSnapshot, IJsonPatch, Instance, onPatch } from 'mobx-state-tree'
import persist from './root-store-persist'
import { logger } from '../logger'
import fs from 'fs-extra'
import path from 'path'

const STORAGE_PATH = path.join(process.cwd(), 'appData/storage/')
const STORE_FILE = path.join(STORAGE_PATH, 'root-store.json')

/**
 * Setup the root state.
 */
export async function setupRootStore(): Promise<RootStore> {
  // prepare the environment that will be associated with the RootStore.
  const env = await Promise.resolve({})

  const rootStore: Instance<typeof RootStoreModel> = RootStoreModel.create({}, env)
  
  // Create storage adapter that uses JSON file
  const storage = {
    get: (key: string) => {
      try {
        if (fs.existsSync(STORE_FILE)) {
          const data = fs.readFileSync(STORE_FILE, 'utf-8')
          const parsed = JSON.parse(data)
          return parsed[key]
        }
      } catch (error) {
        logger.error('Error reading store:', error)
      }
      return undefined
    },
    set: (key: string, value: any) => {
      try {
        fs.mkdirSync(STORAGE_PATH, { recursive: true })
        let data: any = {}
        if (fs.existsSync(STORE_FILE)) {
          const existing = fs.readFileSync(STORE_FILE, 'utf-8')
          data = JSON.parse(existing)
        }
        data[key] = value
        fs.writeFileSync(STORE_FILE, JSON.stringify(data, null, 2))
      } catch (error) {
        logger.error('Error writing store:', error)
      }
    }
  }

  await persist('rootStore', rootStore, {
    storage,
    beforeSave: (rootStore: RootStoreSnapshot) => {
      // ignore gameMultiAccount, will be encrypted later
      return {
        ...rootStore,
        optionStore: {
          ...rootStore.optionStore,
          gameMultiAccount: undefined
        }
      }
    }
  })
  logger.info('RootStore -> restored')

  // Store patches for broadcasting
  const patchesFromClient: Array<string> = []

  onPatch(rootStore, (patch) => {
    logger.debug('Got change: ', patch)

    const patchHash = hash(patch)
    if (patchesFromClient.includes(patchHash)) {
      logger.debug('patch already applied ', patchHash)
      patchesFromClient.splice(patchesFromClient.indexOf(patchHash), 1)
      return
    }

    // Patches will be broadcast via API
  })

  return rootStore
}
