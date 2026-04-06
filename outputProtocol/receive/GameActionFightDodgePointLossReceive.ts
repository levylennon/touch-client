/**
 * GameActionFightDodgePointLossMessage — inferred from .on("GameActionFightDodgePointLossMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightDodgePointLossEventName = "GameActionFightDodgePointLossMessage" as const;

export interface GameActionFightDodgePointLossPayload {
  actionId?: unknown;
  amount?: unknown;
  effectId?: unknown;
  targetId?: unknown;
}

export class GameActionFightDodgePointLossReceive implements GameActionFightDodgePointLossPayload {
  _messageType = "GameActionFightDodgePointLossMessage" as const;
  actionId?: unknown;
  amount?: unknown;
  effectId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightDodgePointLossPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightDodgePointLossMessage" as const;
    this._isInitialized = true;
  }
}
