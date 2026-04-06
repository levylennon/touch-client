/**
 * HouseToSellListRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * Payload may include fields not listed here.
 */

export const HouseToSellListRequestMessageType = "HouseToSellListRequestMessage" as const;

export interface HouseToSellListRequestPayload {
  pageIndex?: number;
  [key: string]: unknown;
}

export class HouseToSellListRequestSend implements HouseToSellListRequestPayload {
  _messageType = "HouseToSellListRequestMessage" as const;
  pageIndex?: number;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<HouseToSellListRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HouseToSellListRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): HouseToSellListRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as HouseToSellListRequestPayload;
  }
}
