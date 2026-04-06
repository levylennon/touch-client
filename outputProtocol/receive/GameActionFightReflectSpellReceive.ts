/**
 * GameActionFightReflectSpellMessage — inferred from .on("GameActionFightReflectSpellMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightReflectSpellEventName = "GameActionFightReflectSpellMessage" as const;

export interface GameActionFightReflectSpellPayload {
  effectId?: unknown;
  targetId?: unknown;
}

export class GameActionFightReflectSpellReceive implements GameActionFightReflectSpellPayload {
  _messageType = "GameActionFightReflectSpellMessage" as const;
  effectId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightReflectSpellPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightReflectSpellMessage" as const;
    this._isInitialized = true;
  }
}
