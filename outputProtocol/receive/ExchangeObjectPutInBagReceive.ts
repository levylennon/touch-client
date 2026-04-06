/**
 * ExchangeObjectPutInBagMessage — inferred from .on("ExchangeObjectPutInBagMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeObjectPutInBagEventName = "ExchangeObjectPutInBagMessage" as const;

export interface ExchangeObjectPutInBagPayload {
  [key: string]: unknown;
}

export class ExchangeObjectPutInBagReceive implements ExchangeObjectPutInBagPayload {
  _messageType = "ExchangeObjectPutInBagMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeObjectPutInBagPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeObjectPutInBagMessage" as const;
    this._isInitialized = true;
  }
}
