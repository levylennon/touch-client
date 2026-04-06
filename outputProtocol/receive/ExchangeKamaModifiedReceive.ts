/**
 * ExchangeKamaModifiedMessage — inferred from .on("ExchangeKamaModifiedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeKamaModifiedEventName = "ExchangeKamaModifiedMessage" as const;

export interface ExchangeKamaModifiedPayload {
  [key: string]: unknown;
}

export class ExchangeKamaModifiedReceive implements ExchangeKamaModifiedPayload {
  _messageType = "ExchangeKamaModifiedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeKamaModifiedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeKamaModifiedMessage" as const;
    this._isInitialized = true;
  }
}
