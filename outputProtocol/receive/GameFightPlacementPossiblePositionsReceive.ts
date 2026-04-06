/**
 * GameFightPlacementPossiblePositionsMessage — inferred from .on("GameFightPlacementPossiblePositionsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightPlacementPossiblePositionsEventName = "GameFightPlacementPossiblePositionsMessage" as const;

export interface GameFightPlacementPossiblePositionsPayload {
  positionsForChallengers?: unknown;
  positionsForDefenders?: unknown;
  teamNumber?: unknown;
}

export class GameFightPlacementPossiblePositionsReceive implements GameFightPlacementPossiblePositionsPayload {
  _messageType = "GameFightPlacementPossiblePositionsMessage" as const;
  positionsForChallengers?: unknown;
  positionsForDefenders?: unknown;
  teamNumber?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightPlacementPossiblePositionsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightPlacementPossiblePositionsMessage" as const;
    this._isInitialized = true;
  }
}
