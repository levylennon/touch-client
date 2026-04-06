/**
 * ExchangeBidHouseInListUpdatedMessage — inferred from .on("ExchangeBidHouseInListUpdatedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeBidHouseInListUpdatedEventName = "ExchangeBidHouseInListUpdatedMessage" as const;

export interface ExchangeBidHouseInListUpdatedPayload {
  effects?: unknown;
  itemUID?: unknown;
  objGenericId?: unknown;
  prices?: unknown;
}

export class ExchangeBidHouseInListUpdatedReceive implements ExchangeBidHouseInListUpdatedPayload {
  _messageType = "ExchangeBidHouseInListUpdatedMessage" as const;
  effects?: unknown;
  itemUID?: unknown;
  objGenericId?: unknown;
  prices?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidHouseInListUpdatedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidHouseInListUpdatedMessage" as const;
    this._isInitialized = true;
  }
}
