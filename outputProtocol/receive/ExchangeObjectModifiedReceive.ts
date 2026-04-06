/**
 * ExchangeObjectModifiedMessage — inferred from .on("ExchangeObjectModifiedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeObjectModifiedEventName = "ExchangeObjectModifiedMessage" as const;

export interface ExchangeObjectModifiedPayload {
  [key: string]: unknown;
}

export class ExchangeObjectModifiedReceive implements ExchangeObjectModifiedPayload {
  _messageType = "ExchangeObjectModifiedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeObjectModifiedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeObjectModifiedMessage" as const;
    this._isInitialized = true;
  }
}
