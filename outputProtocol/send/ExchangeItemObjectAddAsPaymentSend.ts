/**
 * ExchangeItemObjectAddAsPaymentMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeItemObjectAddAsPaymentMessageType = "ExchangeItemObjectAddAsPaymentMessage" as const;

export interface ExchangeItemObjectAddAsPaymentPayload {
  bAdd?: unknown;
  objectToMoveId?: unknown;
  paymentType?: unknown;
  quantity?: unknown;
}

export class ExchangeItemObjectAddAsPaymentSend implements ExchangeItemObjectAddAsPaymentPayload {
  _messageType = "ExchangeItemObjectAddAsPaymentMessage" as const;
  bAdd?: unknown;
  objectToMoveId?: unknown;
  paymentType?: unknown;
  quantity?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeItemObjectAddAsPaymentPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeItemObjectAddAsPaymentMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeItemObjectAddAsPaymentPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeItemObjectAddAsPaymentPayload;
  }
}
