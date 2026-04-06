/**
 * PingRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PingRequestMessageType = "PingRequestMessage" as const;

export interface PingRequestPayload {
  cell?: unknown;
  targetType?: unknown;
  type?: unknown;
}

export class PingRequestSend implements PingRequestPayload {
  _messageType = "PingRequestMessage" as const;
  cell?: unknown;
  targetType?: unknown;
  type?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PingRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PingRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PingRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PingRequestPayload;
  }
}
