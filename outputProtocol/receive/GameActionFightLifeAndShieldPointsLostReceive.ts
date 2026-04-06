/**
 * GameActionFightLifeAndShieldPointsLostMessage — inferred from .on("GameActionFightLifeAndShieldPointsLostMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightLifeAndShieldPointsLostEventName = "GameActionFightLifeAndShieldPointsLostMessage" as const;

export interface GameActionFightLifeAndShieldPointsLostPayload {
  actionId?: unknown;
  effectId?: unknown;
  loss?: unknown;
  permanentDamages?: unknown;
  shieldLoss?: unknown;
  targetId?: unknown;
}

export class GameActionFightLifeAndShieldPointsLostReceive implements GameActionFightLifeAndShieldPointsLostPayload {
  _messageType = "GameActionFightLifeAndShieldPointsLostMessage" as const;
  actionId?: unknown;
  effectId?: unknown;
  loss?: unknown;
  permanentDamages?: unknown;
  shieldLoss?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightLifeAndShieldPointsLostPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightLifeAndShieldPointsLostMessage" as const;
    this._isInitialized = true;
  }
}
