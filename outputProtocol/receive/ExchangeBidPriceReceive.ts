/**
 * ExchangeBidPriceMessage — inferred from .on("ExchangeBidPriceMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeBidPriceEventName = "ExchangeBidPriceMessage" as const;

export interface ExchangeBidPricePayload {
  [key: string]: unknown;
}

export class ExchangeBidPriceReceive implements ExchangeBidPricePayload {
  _messageType = "ExchangeBidPriceMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidPricePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidPriceMessage" as const;
    this._isInitialized = true;
  }
}
