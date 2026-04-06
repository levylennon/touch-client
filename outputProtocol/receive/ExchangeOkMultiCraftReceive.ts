/**
 * ExchangeOkMultiCraftMessage — inferred from .on("ExchangeOkMultiCraftMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeOkMultiCraftEventName = "ExchangeOkMultiCraftMessage" as const;

export interface ExchangeOkMultiCraftPayload {
  [key: string]: unknown;
}

export class ExchangeOkMultiCraftReceive implements ExchangeOkMultiCraftPayload {
  _messageType = "ExchangeOkMultiCraftMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeOkMultiCraftPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeOkMultiCraftMessage" as const;
    this._isInitialized = true;
  }
}
