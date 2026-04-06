/**
 * ExchangeStartedBidBuyerMessage — inferred from .on("ExchangeStartedBidBuyerMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeStartedBidBuyerEventName = "ExchangeStartedBidBuyerMessage" as const;

export interface ExchangeStartedBidBuyerPayload {
  buyerDescriptor?: {
    types?: unknown;
  };
}

export class ExchangeStartedBidBuyerReceive implements ExchangeStartedBidBuyerPayload {
  _messageType = "ExchangeStartedBidBuyerMessage" as const;
  buyerDescriptor?: {
    types?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<ExchangeStartedBidBuyerPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeStartedBidBuyerMessage" as const;
    this._isInitialized = true;
  }
}
