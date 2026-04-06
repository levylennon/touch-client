/**
 * HouseSellFromInsideRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const HouseSellFromInsideRequestMessageType = "HouseSellFromInsideRequestMessage" as const;

export interface HouseSellFromInsideRequestPayload {
  amount?: number | unknown;
}

export class HouseSellFromInsideRequestSend implements HouseSellFromInsideRequestPayload {
  _messageType = "HouseSellFromInsideRequestMessage" as const;
  amount?: number | unknown;
  _isInitialized = false;

  constructor(data: Partial<HouseSellFromInsideRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HouseSellFromInsideRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): HouseSellFromInsideRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as HouseSellFromInsideRequestPayload;
  }
}
