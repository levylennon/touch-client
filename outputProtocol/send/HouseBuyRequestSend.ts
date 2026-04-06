/**
 * HouseBuyRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const HouseBuyRequestMessageType = "HouseBuyRequestMessage" as const;

export interface HouseBuyRequestPayload {
  proposedPrice?: unknown;
}

export class HouseBuyRequestSend implements HouseBuyRequestPayload {
  _messageType = "HouseBuyRequestMessage" as const;
  proposedPrice?: unknown;
  _isInitialized = false;

  constructor(data: Partial<HouseBuyRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HouseBuyRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): HouseBuyRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as HouseBuyRequestPayload;
  }
}
