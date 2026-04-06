/**
 * ExchangeSellOkMessage — inferred from .on("ExchangeSellOkMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeSellOkEventName = "ExchangeSellOkMessage" as const;

export interface ExchangeSellOkPayload {
  [key: string]: unknown;
}

export class ExchangeSellOkReceive implements ExchangeSellOkPayload {
  _messageType = "ExchangeSellOkMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeSellOkPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeSellOkMessage" as const;
    this._isInitialized = true;
  }
}
