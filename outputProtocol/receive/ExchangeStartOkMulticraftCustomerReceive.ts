/**
 * ExchangeStartOkMulticraftCustomerMessage — inferred from .on("ExchangeStartOkMulticraftCustomerMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeStartOkMulticraftCustomerEventName = "ExchangeStartOkMulticraftCustomerMessage" as const;

export interface ExchangeStartOkMulticraftCustomerPayload {
  [key: string]: unknown;
}

export class ExchangeStartOkMulticraftCustomerReceive implements ExchangeStartOkMulticraftCustomerPayload {
  _messageType = "ExchangeStartOkMulticraftCustomerMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeStartOkMulticraftCustomerPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeStartOkMulticraftCustomerMessage" as const;
    this._isInitialized = true;
  }
}
