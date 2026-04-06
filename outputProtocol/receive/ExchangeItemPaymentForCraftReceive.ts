/**
 * ExchangeItemPaymentForCraftMessage — inferred from .on("ExchangeItemPaymentForCraftMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeItemPaymentForCraftEventName = "ExchangeItemPaymentForCraftMessage" as const;

export interface ExchangeItemPaymentForCraftPayload {
  object?: unknown;
  onlySuccess?: unknown;
}

export class ExchangeItemPaymentForCraftReceive implements ExchangeItemPaymentForCraftPayload {
  _messageType = "ExchangeItemPaymentForCraftMessage" as const;
  object?: unknown;
  onlySuccess?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeItemPaymentForCraftPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeItemPaymentForCraftMessage" as const;
    this._isInitialized = true;
  }
}
