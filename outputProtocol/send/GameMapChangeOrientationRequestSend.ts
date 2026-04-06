/**
 * GameMapChangeOrientationRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameMapChangeOrientationRequestMessageType = "GameMapChangeOrientationRequestMessage" as const;

export interface GameMapChangeOrientationRequestPayload {
  direction?: unknown;
}

export class GameMapChangeOrientationRequestSend implements GameMapChangeOrientationRequestPayload {
  _messageType = "GameMapChangeOrientationRequestMessage" as const;
  direction?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameMapChangeOrientationRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameMapChangeOrientationRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameMapChangeOrientationRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameMapChangeOrientationRequestPayload;
  }
}
