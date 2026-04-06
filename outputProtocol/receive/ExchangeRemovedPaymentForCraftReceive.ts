/**
 * ExchangeRemovedPaymentForCraftMessage — inferred from .on("ExchangeRemovedPaymentForCraftMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeRemovedPaymentForCraftEventName = "ExchangeRemovedPaymentForCraftMessage" as const;

export interface ExchangeRemovedPaymentForCraftPayload {
  objectUID?: unknown;
  onlySuccess?: unknown;
}

export class ExchangeRemovedPaymentForCraftReceive implements ExchangeRemovedPaymentForCraftPayload {
  _messageType = "ExchangeRemovedPaymentForCraftMessage" as const;
  objectUID?: unknown;
  onlySuccess?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeRemovedPaymentForCraftPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeRemovedPaymentForCraftMessage" as const;
    this._isInitialized = true;
  }
}
