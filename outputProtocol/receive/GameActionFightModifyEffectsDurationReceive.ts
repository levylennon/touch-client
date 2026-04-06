/**
 * GameActionFightModifyEffectsDurationMessage — inferred from .on("GameActionFightModifyEffectsDurationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightModifyEffectsDurationEventName = "GameActionFightModifyEffectsDurationMessage" as const;

export interface GameActionFightModifyEffectsDurationPayload {
  delta?: unknown;
  effectId?: unknown;
  sourceId?: unknown;
  targetId?: unknown;
}

export class GameActionFightModifyEffectsDurationReceive implements GameActionFightModifyEffectsDurationPayload {
  _messageType = "GameActionFightModifyEffectsDurationMessage" as const;
  delta?: unknown;
  effectId?: unknown;
  sourceId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightModifyEffectsDurationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightModifyEffectsDurationMessage" as const;
    this._isInitialized = true;
  }
}
