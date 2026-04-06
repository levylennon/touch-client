/**
 * ExchangeBidHouseBuyResultMessage — inferred from .on("ExchangeBidHouseBuyResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeBidHouseBuyResultEventName = "ExchangeBidHouseBuyResultMessage" as const;

export interface ExchangeBidHouseBuyResultPayload {
  bought?: unknown;
}

export class ExchangeBidHouseBuyResultReceive implements ExchangeBidHouseBuyResultPayload {
  _messageType = "ExchangeBidHouseBuyResultMessage" as const;
  bought?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidHouseBuyResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidHouseBuyResultMessage" as const;
    this._isInitialized = true;
  }
}
