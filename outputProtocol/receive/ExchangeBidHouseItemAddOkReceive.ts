/**
 * ExchangeBidHouseItemAddOkMessage — inferred from .on("ExchangeBidHouseItemAddOkMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeBidHouseItemAddOkEventName = "ExchangeBidHouseItemAddOkMessage" as const;

export interface ExchangeBidHouseItemAddOkPayload {
  itemInfo?: unknown;
}

export class ExchangeBidHouseItemAddOkReceive implements ExchangeBidHouseItemAddOkPayload {
  _messageType = "ExchangeBidHouseItemAddOkMessage" as const;
  itemInfo?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidHouseItemAddOkPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidHouseItemAddOkMessage" as const;
    this._isInitialized = true;
  }
}
