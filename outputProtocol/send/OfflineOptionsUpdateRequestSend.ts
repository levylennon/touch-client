/**
 * OfflineOptionsUpdateRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const OfflineOptionsUpdateRequestMessageType = "OfflineOptionsUpdateRequestMessage" as const;

export interface OfflineOptionsUpdateRequestPayload {
  options?: unknown;
}

export class OfflineOptionsUpdateRequestSend implements OfflineOptionsUpdateRequestPayload {
  _messageType = "OfflineOptionsUpdateRequestMessage" as const;
  options?: unknown;
  _isInitialized = false;

  constructor(data: Partial<OfflineOptionsUpdateRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "OfflineOptionsUpdateRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): OfflineOptionsUpdateRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as OfflineOptionsUpdateRequestPayload;
  }
}
