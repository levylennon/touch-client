/**
 * GameMapMovementRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GameMapMovementRequestMessageType = "GameMapMovementRequestMessage" as const;

export interface GameMapMovementRequestPayload {
  keyMovements?: unknown;
  mapId?: unknown;
}

export class GameMapMovementRequestSend implements GameMapMovementRequestPayload {
  _messageType = "GameMapMovementRequestMessage" as const;
  keyMovements?: unknown;
  mapId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameMapMovementRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameMapMovementRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameMapMovementRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameMapMovementRequestPayload;
  }
}
