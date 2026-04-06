/**
 * ExchangeModifiedPaymentForCraftMessage — inferred from .on("ExchangeModifiedPaymentForCraftMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeModifiedPaymentForCraftEventName = "ExchangeModifiedPaymentForCraftMessage" as const;

export interface ExchangeModifiedPaymentForCraftPayload {
  object?: unknown;
  onlySuccess?: unknown;
}

export class ExchangeModifiedPaymentForCraftReceive implements ExchangeModifiedPaymentForCraftPayload {
  _messageType = "ExchangeModifiedPaymentForCraftMessage" as const;
  object?: unknown;
  onlySuccess?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeModifiedPaymentForCraftPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeModifiedPaymentForCraftMessage" as const;
    this._isInitialized = true;
  }
}
