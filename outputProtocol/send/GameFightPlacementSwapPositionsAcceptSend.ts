/**
 * GameFightPlacementSwapPositionsAcceptMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameFightPlacementSwapPositionsAcceptMessageType = "GameFightPlacementSwapPositionsAcceptMessage" as const;

export interface GameFightPlacementSwapPositionsAcceptPayload {
  requestId?: unknown;
}

export class GameFightPlacementSwapPositionsAcceptSend implements GameFightPlacementSwapPositionsAcceptPayload {
  _messageType = "GameFightPlacementSwapPositionsAcceptMessage" as const;
  requestId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightPlacementSwapPositionsAcceptPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightPlacementSwapPositionsAcceptMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameFightPlacementSwapPositionsAcceptPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameFightPlacementSwapPositionsAcceptPayload;
  }
}
