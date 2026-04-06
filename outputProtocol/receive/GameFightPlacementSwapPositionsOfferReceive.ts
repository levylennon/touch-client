/**
 * GameFightPlacementSwapPositionsOfferMessage — inferred from .on("GameFightPlacementSwapPositionsOfferMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightPlacementSwapPositionsOfferEventName = "GameFightPlacementSwapPositionsOfferMessage" as const;

export interface GameFightPlacementSwapPositionsOfferPayload {
  requesterId?: unknown;
}

export class GameFightPlacementSwapPositionsOfferReceive implements GameFightPlacementSwapPositionsOfferPayload {
  _messageType = "GameFightPlacementSwapPositionsOfferMessage" as const;
  requesterId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightPlacementSwapPositionsOfferPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightPlacementSwapPositionsOfferMessage" as const;
    this._isInitialized = true;
  }
}
