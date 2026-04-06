/**
 * GameActionFightDispelSpellLevelMessage — inferred from .on("GameActionFightDispelSpellLevelMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightDispelSpellLevelEventName = "GameActionFightDispelSpellLevelMessage" as const;

export interface GameActionFightDispelSpellLevelPayload {
  SpellLevelId?: unknown;
  targetId?: unknown;
}

export class GameActionFightDispelSpellLevelReceive implements GameActionFightDispelSpellLevelPayload {
  _messageType = "GameActionFightDispelSpellLevelMessage" as const;
  SpellLevelId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightDispelSpellLevelPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightDispelSpellLevelMessage" as const;
    this._isInitialized = true;
  }
}
