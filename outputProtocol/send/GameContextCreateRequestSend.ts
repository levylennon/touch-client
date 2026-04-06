/**
 * GameContextCreateRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const GameContextCreateRequestMessageType = "GameContextCreateRequestMessage" as const;

export interface GameContextCreateRequestPayload {
}

export class GameContextCreateRequestSend implements GameContextCreateRequestPayload {
  _messageType = "GameContextCreateRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<GameContextCreateRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameContextCreateRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GameContextCreateRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GameContextCreateRequestPayload;
  }
}
