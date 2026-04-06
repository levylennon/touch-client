/**
 * EmotePlayRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const EmotePlayRequestMessageType = "EmotePlayRequestMessage" as const;

export interface EmotePlayRequestPayload {
  emoteId?: unknown;
}

export class EmotePlayRequestSend implements EmotePlayRequestPayload {
  _messageType = "EmotePlayRequestMessage" as const;
  emoteId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<EmotePlayRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "EmotePlayRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): EmotePlayRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as EmotePlayRequestPayload;
  }
}
