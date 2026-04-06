/**
 * ExchangeClearPaymentForCraftMessage — inferred from .on("ExchangeClearPaymentForCraftMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeClearPaymentForCraftEventName = "ExchangeClearPaymentForCraftMessage" as const;

export interface ExchangeClearPaymentForCraftPayload {
  paymentType?: unknown;
}

export class ExchangeClearPaymentForCraftReceive implements ExchangeClearPaymentForCraftPayload {
  _messageType = "ExchangeClearPaymentForCraftMessage" as const;
  paymentType?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeClearPaymentForCraftPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeClearPaymentForCraftMessage" as const;
    this._isInitialized = true;
  }
}
