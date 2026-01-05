import { GameMultiAccountSnapshot, RootStore } from '@lindo/shared'
import crypto from 'crypto-js'
import * as argon2 from 'argon2'
import { onSnapshot } from 'mobx-state-tree'
import { logger } from './logger'
import fs from 'fs-extra'
import path from 'path'

interface MultiAccountStore {
  masterPassword: string
  useSecureStorage: boolean
  multiAccountState: string
}

const STORAGE_PATH = path.join(process.cwd(), 'appData/storage/')
const MULTI_ACCOUNT_FILE = path.join(STORAGE_PATH, 'multi-account.json')

export class MultiAccount {
  private _rootStore: RootStore
  private _masterPassword?: string

  private _getStore(): MultiAccountStore {
    try {
      if (fs.existsSync(MULTI_ACCOUNT_FILE)) {
        return JSON.parse(fs.readFileSync(MULTI_ACCOUNT_FILE, 'utf-8'))
      }
    } catch (error) {
      logger.error('Error reading multi-account store:', error)
    }
    return { masterPassword: '', useSecureStorage: false, multiAccountState: '' }
  }

  private _setStore(data: Partial<MultiAccountStore>) {
    try {
      fs.mkdirSync(STORAGE_PATH, { recursive: true })
      const existing = this._getStore()
      const updated = { ...existing, ...data }
      fs.writeFileSync(MULTI_ACCOUNT_FILE, JSON.stringify(updated, null, 2))
    } catch (error) {
      logger.error('Error writing multi-account store:', error)
    }
  }

  private static _encrypt(input: string, password?: string): string {
    if (password) {
      const encJson = crypto.AES.encrypt(input, password).toString()
      return crypto.enc.Base64.stringify(crypto.enc.Utf8.parse(encJson))
    }
    throw new Error('Master password is not configured')
  }

  private static _decrypt(input: string, password?: string): string {
    if (password) {
      const decData = crypto.enc.Base64.parse(input).toString(crypto.enc.Utf8)
      return crypto.AES.decrypt(decData, password).toString(crypto.enc.Utf8)
    }
    throw new Error('Master password is not configured')
  }

  constructor(rootStore: RootStore) {
    this._rootStore = rootStore

    onSnapshot(rootStore.optionStore.gameMultiAccount, (snapshot) => {
      if (!rootStore.optionStore.gameMultiAccount.locked && this._masterPassword) {
        logger.debug('Multi-account is unlocked, gonna encrypt the store')
        this._encryptAndSaveState(snapshot, this._masterPassword)
      }
    })

    this._isMasterPasswordConfigured().then((isConfigured) => {
      this._rootStore.optionStore.gameMultiAccount.setConfigured(isConfigured)
    })
  }

  async isEnabled() {
    return (await this._isMasterPasswordConfigured()) && this._rootStore.optionStore.multiAccountEnabled
  }

  async unlockWithTeam(): Promise<string> {
    // In web version, this would need to be handled via API
    throw new Error('unlockWithTeam not implemented for web version')
  }

  async saveMasterPassword(masterPassword: string): Promise<void> {
    const encryptedPassword = await argon2.hash(masterPassword)
    this._setStore({
      masterPassword: encryptedPassword,
      useSecureStorage: false // Web version doesn't have secure storage
    })
    this._masterPassword = masterPassword
    this._rootStore.optionStore.gameMultiAccount.setConfigured(true)
    this._rootStore.optionStore.gameMultiAccount.unlock()
  }

  async unlock(masterPassword: string): Promise<boolean> {
    return this._unlockApplication(masterPassword)
  }

  isMasterPasswordConfigured(): boolean {
    const store = this._getStore()
    return !!store.masterPassword
  }

  async changeMasterPassword(masterPassword: string, oldPassword: string): Promise<boolean> {
    return this._changeMasterPassword(masterPassword, oldPassword)
  }

  async removeMasterPassword(): Promise<void> {
    return this._removeMasterPassword()
  }

  async encryptCharacterPassword(characterPassword: string): Promise<string> {
    return MultiAccount._encrypt(characterPassword, this._masterPassword)
  }

  async decryptCharacterPassword(encryptedCharacterPassword: string): Promise<string> {
    return MultiAccount._decrypt(encryptedCharacterPassword, this._masterPassword)
  }

  private async _removeMasterPassword(): Promise<void> {
    this._setStore({
      masterPassword: '',
      multiAccountState: '',
      useSecureStorage: false
    })
    this._masterPassword = undefined
    this._rootStore.optionStore.restoreGameMultiAccount({})
  }

  private async _changeMasterPassword(masterPassword: string, oldPassword: string): Promise<boolean> {
    if (await this._checkMasterPassword(oldPassword)) {
      const encryptedState = this._getStore().multiAccountState
      const strState = MultiAccount._decrypt(encryptedState, oldPassword)
      const state: GameMultiAccountSnapshot = JSON.parse(strState)
      const stateWithNewPassword: GameMultiAccountSnapshot = {
        ...state,
        characters: state.characters.map((character) => {
          return {
            ...character,
            password: MultiAccount._encrypt(MultiAccount._decrypt(character.password, oldPassword), masterPassword)
          }
        })
      }
      await this.saveMasterPassword(masterPassword)
      this._encryptAndSaveState(stateWithNewPassword, masterPassword)
      return true
    }
    return false
  }

  private async _isMasterPasswordConfigured(): Promise<boolean> {
    return this.isMasterPasswordConfigured()
  }

  private async _checkMasterPassword(input: string): Promise<boolean> {
    const store = this._getStore()
    const hashedPassword = store.masterPassword
    if (!hashedPassword) return false
    return argon2.verify(hashedPassword, input)
  }

  private _encryptAndSaveState(snapshot: GameMultiAccountSnapshot, password: string): void {
    const encryptedState = MultiAccount._encrypt(JSON.stringify(snapshot), password)
    this._setStore({ multiAccountState: encryptedState })
  }

  private async _unlockApplication(masterPassword: string): Promise<boolean> {
    const passwordOk = await this._checkMasterPassword(masterPassword)
    if (passwordOk) {
      this._masterPassword = masterPassword

      const encryptedState = this._getStore().multiAccountState
      if (encryptedState) {
        logger.debug('Multi-account is unlocked, gonna decrypt the store')
        const decrypted = MultiAccount._decrypt(encryptedState, masterPassword)
        const multiAccountState = JSON.parse(decrypted)
        this._rootStore.optionStore.restoreGameMultiAccount(multiAccountState)
        this._rootStore.optionStore.gameMultiAccount.setConfigured(true)
      }

      this._rootStore.optionStore.gameMultiAccount.unlock()
    }
    return passwordOk
  }
}
