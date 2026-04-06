/**
 * PingPointRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PingPointRequestMessageType = "PingPointRequestMessage" as const;

export interface PingPointRequestPayload {
  type?: unknown;
}

export class PingPointRequestSend implements PingPointRequestPayload {
  _messageType = "PingPointRequestMessage" as const;
  type?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PingPointRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PingPointRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PingPointRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PingPointRequestPayload;
  }
}
