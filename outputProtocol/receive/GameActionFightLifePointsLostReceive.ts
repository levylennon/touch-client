/**
 * GameActionFightLifePointsLostMessage — inferred from .on("GameActionFightLifePointsLostMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightLifePointsLostEventName = "GameActionFightLifePointsLostMessage" as const;

export interface GameActionFightLifePointsLostPayload {
  actionId?: unknown;
  effectId?: unknown;
  loss?: unknown;
  permanentDamages?: unknown;
  targetId?: unknown;
}

export class GameActionFightLifePointsLostReceive implements GameActionFightLifePointsLostPayload {
  _messageType = "GameActionFightLifePointsLostMessage" as const;
  actionId?: unknown;
  effectId?: unknown;
  loss?: unknown;
  permanentDamages?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightLifePointsLostPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightLifePointsLostMessage" as const;
    this._isInitialized = true;
  }
}
