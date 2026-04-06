/**
 * ExchangeObjectModifiedInBagMessage — inferred from .on("ExchangeObjectModifiedInBagMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeObjectModifiedInBagEventName = "ExchangeObjectModifiedInBagMessage" as const;

export interface ExchangeObjectModifiedInBagPayload {
  [key: string]: unknown;
}

export class ExchangeObjectModifiedInBagReceive implements ExchangeObjectModifiedInBagPayload {
  _messageType = "ExchangeObjectModifiedInBagMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeObjectModifiedInBagPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeObjectModifiedInBagMessage" as const;
    this._isInitialized = true;
  }
}
