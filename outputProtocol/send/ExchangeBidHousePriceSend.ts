/**
 * ExchangeBidHousePriceMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeBidHousePriceMessageType = "ExchangeBidHousePriceMessage" as const;

export interface ExchangeBidHousePricePayload {
  genId?: unknown;
}

export class ExchangeBidHousePriceSend implements ExchangeBidHousePricePayload {
  _messageType = "ExchangeBidHousePriceMessage" as const;
  genId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidHousePricePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidHousePriceMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeBidHousePricePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeBidHousePricePayload;
  }
}
