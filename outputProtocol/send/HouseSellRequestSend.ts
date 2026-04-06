/**
 * HouseSellRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const HouseSellRequestMessageType = "HouseSellRequestMessage" as const;

export interface HouseSellRequestPayload {
  amount?: number | unknown;
}

export class HouseSellRequestSend implements HouseSellRequestPayload {
  _messageType = "HouseSellRequestMessage" as const;
  amount?: number | unknown;
  _isInitialized = false;

  constructor(data: Partial<HouseSellRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HouseSellRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): HouseSellRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as HouseSellRequestPayload;
  }
}
