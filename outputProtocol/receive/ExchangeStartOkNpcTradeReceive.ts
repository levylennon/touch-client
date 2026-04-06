/**
 * ExchangeStartOkNpcTradeMessage — inferred from .on("ExchangeStartOkNpcTradeMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeStartOkNpcTradeEventName = "ExchangeStartOkNpcTradeMessage" as const;

export interface ExchangeStartOkNpcTradePayload {
  [key: string]: unknown;
}

export class ExchangeStartOkNpcTradeReceive implements ExchangeStartOkNpcTradePayload {
  _messageType = "ExchangeStartOkNpcTradeMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeStartOkNpcTradePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeStartOkNpcTradeMessage" as const;
    this._isInitialized = true;
  }
}
