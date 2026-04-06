/**
 * GameActionFightReflectDamagesMessage — inferred from .on("GameActionFightReflectDamagesMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightReflectDamagesEventName = "GameActionFightReflectDamagesMessage" as const;

export interface GameActionFightReflectDamagesPayload {
  effectId?: unknown;
  sourceId?: unknown;
}

export class GameActionFightReflectDamagesReceive implements GameActionFightReflectDamagesPayload {
  _messageType = "GameActionFightReflectDamagesMessage" as const;
  effectId?: unknown;
  sourceId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightReflectDamagesPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightReflectDamagesMessage" as const;
    this._isInitialized = true;
  }
}
