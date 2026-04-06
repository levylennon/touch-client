/**
 * GameActionFightSpellImmunityMessage — inferred from .on("GameActionFightSpellImmunityMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightSpellImmunityEventName = "GameActionFightSpellImmunityMessage" as const;

export interface GameActionFightSpellImmunityPayload {
  effectId?: unknown;
  targetId?: unknown;
}

export class GameActionFightSpellImmunityReceive implements GameActionFightSpellImmunityPayload {
  _messageType = "GameActionFightSpellImmunityMessage" as const;
  effectId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightSpellImmunityPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightSpellImmunityMessage" as const;
    this._isInitialized = true;
  }
}
