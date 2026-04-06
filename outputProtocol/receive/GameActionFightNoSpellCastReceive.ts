/**
 * GameActionFightNoSpellCastMessage — inferred from .on("GameActionFightNoSpellCastMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightNoSpellCastEventName = "GameActionFightNoSpellCastMessage" as const;

export interface GameActionFightNoSpellCastPayload {
  spellLevelId?: unknown;
}

export class GameActionFightNoSpellCastReceive implements GameActionFightNoSpellCastPayload {
  _messageType = "GameActionFightNoSpellCastMessage" as const;
  spellLevelId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightNoSpellCastPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightNoSpellCastMessage" as const;
    this._isInitialized = true;
  }
}
