/**
 * ExchangeBidHouseInListAddedMessage — inferred from .on("ExchangeBidHouseInListAddedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeBidHouseInListAddedEventName = "ExchangeBidHouseInListAddedMessage" as const;

export interface ExchangeBidHouseInListAddedPayload {
  effects?: unknown;
  itemUID?: unknown;
  objGenericId?: unknown;
  prices?: unknown;
}

export class ExchangeBidHouseInListAddedReceive implements ExchangeBidHouseInListAddedPayload {
  _messageType = "ExchangeBidHouseInListAddedMessage" as const;
  effects?: unknown;
  itemUID?: unknown;
  objGenericId?: unknown;
  prices?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidHouseInListAddedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidHouseInListAddedMessage" as const;
    this._isInitialized = true;
  }
}
