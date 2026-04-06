/**
 * ExchangeBidHouseBuyMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeBidHouseBuyMessageType = "ExchangeBidHouseBuyMessage" as const;

export interface ExchangeBidHouseBuyPayload {
  price?: unknown;
  qty?: unknown;
  uid?: unknown;
}

export class ExchangeBidHouseBuySend implements ExchangeBidHouseBuyPayload {
  _messageType = "ExchangeBidHouseBuyMessage" as const;
  price?: unknown;
  qty?: unknown;
  uid?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidHouseBuyPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidHouseBuyMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeBidHouseBuyPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeBidHouseBuyPayload;
  }
}
