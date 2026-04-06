/**
 * ExchangeObjectRemovedFromBagMessage — inferred from .on("ExchangeObjectRemovedFromBagMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeObjectRemovedFromBagEventName = "ExchangeObjectRemovedFromBagMessage" as const;

export interface ExchangeObjectRemovedFromBagPayload {
  [key: string]: unknown;
}

export class ExchangeObjectRemovedFromBagReceive implements ExchangeObjectRemovedFromBagPayload {
  _messageType = "ExchangeObjectRemovedFromBagMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeObjectRemovedFromBagPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeObjectRemovedFromBagMessage" as const;
    this._isInitialized = true;
  }
}
