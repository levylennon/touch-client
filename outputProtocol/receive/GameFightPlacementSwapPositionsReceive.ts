/**
 * GameFightPlacementSwapPositionsMessage — inferred from .on("GameFightPlacementSwapPositionsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightPlacementSwapPositionsEventName = "GameFightPlacementSwapPositionsMessage" as const;

export interface GameFightPlacementSwapPositionsPayload {
  dispositions?: unknown;
}

export class GameFightPlacementSwapPositionsReceive implements GameFightPlacementSwapPositionsPayload {
  _messageType = "GameFightPlacementSwapPositionsMessage" as const;
  dispositions?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightPlacementSwapPositionsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightPlacementSwapPositionsMessage" as const;
    this._isInitialized = true;
  }
}
