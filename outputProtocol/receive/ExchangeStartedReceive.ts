/**
 * ExchangeStartedMessage — inferred from .on("ExchangeStartedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeStartedEventName = "ExchangeStartedMessage" as const;

export interface ExchangeStartedPayload {
  exchangeType?: unknown;
}

export class ExchangeStartedReceive implements ExchangeStartedPayload {
  _messageType = "ExchangeStartedMessage" as const;
  exchangeType?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeStartedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeStartedMessage" as const;
    this._isInitialized = true;
  }
}
