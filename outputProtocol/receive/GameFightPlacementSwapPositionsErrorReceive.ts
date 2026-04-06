/**
 * GameFightPlacementSwapPositionsErrorMessage — inferred from .on("GameFightPlacementSwapPositionsErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightPlacementSwapPositionsErrorEventName = "GameFightPlacementSwapPositionsErrorMessage" as const;

export interface GameFightPlacementSwapPositionsErrorPayload {
  [key: string]: unknown;
}

export class GameFightPlacementSwapPositionsErrorReceive implements GameFightPlacementSwapPositionsErrorPayload {
  _messageType = "GameFightPlacementSwapPositionsErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightPlacementSwapPositionsErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightPlacementSwapPositionsErrorMessage" as const;
    this._isInitialized = true;
  }
}
