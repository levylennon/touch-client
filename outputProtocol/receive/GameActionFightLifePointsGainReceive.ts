/**
 * GameActionFightLifePointsGainMessage — inferred from .on("GameActionFightLifePointsGainMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightLifePointsGainEventName = "GameActionFightLifePointsGainMessage" as const;

export interface GameActionFightLifePointsGainPayload {
  actionId?: unknown;
  delta?: unknown;
  effectId?: unknown;
  targetId?: unknown;
}

export class GameActionFightLifePointsGainReceive implements GameActionFightLifePointsGainPayload {
  _messageType = "GameActionFightLifePointsGainMessage" as const;
  actionId?: unknown;
  delta?: unknown;
  effectId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightLifePointsGainPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightLifePointsGainMessage" as const;
    this._isInitialized = true;
  }
}
