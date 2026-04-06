/**
 * GameFightPlacementSwapPositionsRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameFightPlacementSwapPositionsRequestMessageType = "GameFightPlacementSwapPositionsRequestMessage" as const;

export interface GameFightPlacementSwapPositionsRequestPayload {
  cellId?: unknown;
  requestedId?: unknown;
}

export class GameFightPlacementSwapPositionsRequestSend implements GameFightPlacementSwapPositionsRequestPayload {
  _messageType = "GameFightPlacementSwapPositionsRequestMessage" as const;
  cellId?: unknown;
  requestedId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightPlacementSwapPositionsRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightPlacementSwapPositionsRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameFightPlacementSwapPositionsRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameFightPlacementSwapPositionsRequestPayload;
  }
}
