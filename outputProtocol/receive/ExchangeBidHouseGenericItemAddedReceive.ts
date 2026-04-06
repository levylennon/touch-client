/**
 * ExchangeBidHouseGenericItemAddedMessage — inferred from .on("ExchangeBidHouseGenericItemAddedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeBidHouseGenericItemAddedEventName = "ExchangeBidHouseGenericItemAddedMessage" as const;

export interface ExchangeBidHouseGenericItemAddedPayload {
  objGenericId?: unknown;
}

export class ExchangeBidHouseGenericItemAddedReceive implements ExchangeBidHouseGenericItemAddedPayload {
  _messageType = "ExchangeBidHouseGenericItemAddedMessage" as const;
  objGenericId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidHouseGenericItemAddedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidHouseGenericItemAddedMessage" as const;
    this._isInitialized = true;
  }
}
