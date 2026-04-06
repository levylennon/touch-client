/**
 * ExchangeBidHouseInListRemovedMessage — inferred from .on("ExchangeBidHouseInListRemovedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeBidHouseInListRemovedEventName = "ExchangeBidHouseInListRemovedMessage" as const;

export interface ExchangeBidHouseInListRemovedPayload {
  itemUID?: unknown;
}

export class ExchangeBidHouseInListRemovedReceive implements ExchangeBidHouseInListRemovedPayload {
  _messageType = "ExchangeBidHouseInListRemovedMessage" as const;
  itemUID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidHouseInListRemovedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidHouseInListRemovedMessage" as const;
    this._isInitialized = true;
  }
}
