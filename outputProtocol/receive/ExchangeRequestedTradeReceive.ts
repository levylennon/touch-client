/**
 * ExchangeRequestedTradeMessage — inferred from .on("ExchangeRequestedTradeMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeRequestedTradeEventName = "ExchangeRequestedTradeMessage" as const;

export interface ExchangeRequestedTradePayload {
  [key: string]: unknown;
}

export class ExchangeRequestedTradeReceive implements ExchangeRequestedTradePayload {
  _messageType = "ExchangeRequestedTradeMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeRequestedTradePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeRequestedTradeMessage" as const;
    this._isInitialized = true;
  }
}
