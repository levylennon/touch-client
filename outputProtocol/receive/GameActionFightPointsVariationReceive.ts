/**
 * GameActionFightPointsVariationMessage — inferred from .on("GameActionFightPointsVariationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightPointsVariationEventName = "GameActionFightPointsVariationMessage" as const;

export interface GameActionFightPointsVariationPayload {
  actionId?: unknown;
  delta?: unknown;
  targetId?: unknown;
}

export class GameActionFightPointsVariationReceive implements GameActionFightPointsVariationPayload {
  _messageType = "GameActionFightPointsVariationMessage" as const;
  actionId?: unknown;
  delta?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightPointsVariationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightPointsVariationMessage" as const;
    this._isInitialized = true;
  }
}
