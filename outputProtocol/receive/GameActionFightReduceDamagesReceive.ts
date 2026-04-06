/**
 * GameActionFightReduceDamagesMessage — inferred from .on("GameActionFightReduceDamagesMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightReduceDamagesEventName = "GameActionFightReduceDamagesMessage" as const;

export interface GameActionFightReduceDamagesPayload {
  amount?: unknown;
  effectId?: unknown;
  targetId?: unknown;
}

export class GameActionFightReduceDamagesReceive implements GameActionFightReduceDamagesPayload {
  _messageType = "GameActionFightReduceDamagesMessage" as const;
  amount?: unknown;
  effectId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightReduceDamagesPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightReduceDamagesMessage" as const;
    this._isInitialized = true;
  }
}
