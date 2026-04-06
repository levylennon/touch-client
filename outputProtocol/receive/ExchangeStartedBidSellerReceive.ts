/**
 * ExchangeStartedBidSellerMessage — inferred from .on("ExchangeStartedBidSellerMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeStartedBidSellerEventName = "ExchangeStartedBidSellerMessage" as const;

export interface ExchangeStartedBidSellerPayload {
  sellerDescriptor?: {
    types?: unknown;
  };
}

export class ExchangeStartedBidSellerReceive implements ExchangeStartedBidSellerPayload {
  _messageType = "ExchangeStartedBidSellerMessage" as const;
  sellerDescriptor?: {
    types?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<ExchangeStartedBidSellerPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeStartedBidSellerMessage" as const;
    this._isInitialized = true;
  }
}
