/**
 * ExchangeObjectAddedMessage — inferred from .on("ExchangeObjectAddedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeObjectAddedEventName = "ExchangeObjectAddedMessage" as const;

export interface ExchangeObjectAddedPayload {
  [key: string]: unknown;
}

export class ExchangeObjectAddedReceive implements ExchangeObjectAddedPayload {
  _messageType = "ExchangeObjectAddedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeObjectAddedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeObjectAddedMessage" as const;
    this._isInitialized = true;
  }
}
