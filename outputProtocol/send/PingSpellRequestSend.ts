/**
 * PingSpellRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PingSpellRequestMessageType = "PingSpellRequestMessage" as const;

export interface PingSpellRequestPayload {
  id?: unknown;
  level?: unknown;
}

export class PingSpellRequestSend implements PingSpellRequestPayload {
  _messageType = "PingSpellRequestMessage" as const;
  id?: unknown;
  level?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PingSpellRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PingSpellRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PingSpellRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PingSpellRequestPayload;
  }
}
