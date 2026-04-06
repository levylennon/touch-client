/**
 * ExchangeBidHouseGenericItemRemovedMessage — inferred from .on("ExchangeBidHouseGenericItemRemovedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeBidHouseGenericItemRemovedEventName = "ExchangeBidHouseGenericItemRemovedMessage" as const;

export interface ExchangeBidHouseGenericItemRemovedPayload {
  objGenericId?: unknown;
}

export class ExchangeBidHouseGenericItemRemovedReceive implements ExchangeBidHouseGenericItemRemovedPayload {
  _messageType = "ExchangeBidHouseGenericItemRemovedMessage" as const;
  objGenericId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidHouseGenericItemRemovedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidHouseGenericItemRemovedMessage" as const;
    this._isInitialized = true;
  }
}
