/**
 * FarmSellRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const FarmSellRequestMessageType = "FarmSellRequestMessage" as const;

export interface FarmSellRequestPayload {
  price?: number | unknown;
}

export class FarmSellRequestSend implements FarmSellRequestPayload {
  _messageType = "FarmSellRequestMessage" as const;
  price?: number | unknown;
  _isInitialized = false;

  constructor(data: Partial<FarmSellRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FarmSellRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): FarmSellRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as FarmSellRequestPayload;
  }
}
