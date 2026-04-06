/**
 * GameFightPlacementSwapPositionsCancelMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameFightPlacementSwapPositionsCancelMessageType = "GameFightPlacementSwapPositionsCancelMessage" as const;

export interface GameFightPlacementSwapPositionsCancelPayload {
  requestId?: unknown;
}

export class GameFightPlacementSwapPositionsCancelSend implements GameFightPlacementSwapPositionsCancelPayload {
  _messageType = "GameFightPlacementSwapPositionsCancelMessage" as const;
  requestId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightPlacementSwapPositionsCancelPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightPlacementSwapPositionsCancelMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameFightPlacementSwapPositionsCancelPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameFightPlacementSwapPositionsCancelPayload;
  }
}
