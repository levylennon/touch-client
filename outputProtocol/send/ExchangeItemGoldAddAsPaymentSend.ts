/**
 * ExchangeItemGoldAddAsPaymentMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeItemGoldAddAsPaymentMessageType = "ExchangeItemGoldAddAsPaymentMessage" as const;

export interface ExchangeItemGoldAddAsPaymentPayload {
  paymentType?: unknown;
  quantity?: unknown;
}

export class ExchangeItemGoldAddAsPaymentSend implements ExchangeItemGoldAddAsPaymentPayload {
  _messageType = "ExchangeItemGoldAddAsPaymentMessage" as const;
  paymentType?: unknown;
  quantity?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeItemGoldAddAsPaymentPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeItemGoldAddAsPaymentMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeItemGoldAddAsPaymentPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeItemGoldAddAsPaymentPayload;
  }
}
