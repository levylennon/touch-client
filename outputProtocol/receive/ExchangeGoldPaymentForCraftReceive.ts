/**
 * ExchangeGoldPaymentForCraftMessage — inferred from .on("ExchangeGoldPaymentForCraftMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeGoldPaymentForCraftEventName = "ExchangeGoldPaymentForCraftMessage" as const;

export interface ExchangeGoldPaymentForCraftPayload {
  goldSum?: unknown;
  onlySuccess?: unknown;
}

export class ExchangeGoldPaymentForCraftReceive implements ExchangeGoldPaymentForCraftPayload {
  _messageType = "ExchangeGoldPaymentForCraftMessage" as const;
  goldSum?: unknown;
  onlySuccess?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeGoldPaymentForCraftPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeGoldPaymentForCraftMessage" as const;
    this._isInitialized = true;
  }
}
