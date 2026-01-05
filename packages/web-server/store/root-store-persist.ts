import { RootStoreSnapshot } from '@lindo/shared'
import { onSnapshot, applySnapshot, IStateTreeNode } from 'mobx-state-tree'
import { logger } from '../logger'

export interface IStorage {
  get: (key: string) => any
  set: (key: string, value: any) => void
}

export interface IOptions {
  storage: IStorage
  beforeSave?: (rootStore: RootStoreSnapshot) => object
}

export interface IArgs {
  (name: 'rootStore', store: IStateTreeNode | any, options?: IOptions): Promise<void>
}

export const persist: IArgs = (name, store, options) => {
  const { storage, beforeSave } = options ?? {}

  if (!storage) {
    return Promise.reject(
      new Error(
        'Storage is required. Please configure a storage engine via the `storage:` option.'
      )
    )
  }

  onSnapshot(store, (_snapshot: RootStoreSnapshot) => {
    const snapshot = beforeSave ? beforeSave(_snapshot) : _snapshot
    storage.set(name, snapshot)
  })

  return Promise.resolve(storage.get(name)).then((data) => {
    const snapshot = !isString(data) ? data : JSON.parse(data)
    if (!snapshot) {
      return
    }
    try {
      applySnapshot(store, snapshot)
    } catch (e) {
      logger.error(e)
    }
  })
}

function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export default persist
