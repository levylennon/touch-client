import { Config } from './config'
import { Dofus } from './dofus'
import { CharacterDisplayClass, GUI } from './gui'
import { NpcDialogUi } from './gui/npc-dialog-ui'
import { ActorManager, IsoEngine } from './iso-engine'

export * from './dofus'
export * from './gui'
export * from './iso-engine'
export * from './gui/character-display'

export interface DofusWindow extends Window {
  d: {
    recordActivity: () => void
  }
  initDofus: (callback: () => void) => void
  openDatabase: unknown
  dofus: Dofus
  foreground: {
    rootElement: HTMLDivElement
    _monsterTooltips: []
    showAllMonsterGroupTooltips: () => void
    removeAllMonsterGroupTooltips: () => void
  }
  gui: GUI
  isoEngine: IsoEngine
  actorManager: ActorManager
  CharacterDisplay: CharacterDisplayClass
  Config: Config
  singletons: {
    c: Array<{ exports: { prototype: object } }>
  }
  findSingleton: (name: string, window: DofusWindow) => unknown
  npcDialogUi: NpcDialogUi
  $_authManager: {
    requestWebAuthToken: (code: string, callback: (error: any, accessKey: string, refreshKey: string) => void) => void
  }
}

export interface HTMLIFrameElementWithDofus extends HTMLIFrameElement {
  contentWindow: DofusWindow
}
