/**
 * ExchangeBidHouseItemRemoveOkMessage — inferred from .on("ExchangeBidHouseItemRemoveOkMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeBidHouseItemRemoveOkEventName = "ExchangeBidHouseItemRemoveOkMessage" as const;

export interface ExchangeBidHouseItemRemoveOkPayload {
  sellerId?: unknown;
}

export class ExchangeBidHouseItemRemoveOkReceive implements ExchangeBidHouseItemRemoveOkPayload {
  _messageType = "ExchangeBidHouseItemRemoveOkMessage" as const;
  sellerId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidHouseItemRemoveOkPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidHouseItemRemoveOkMessage" as const;
    this._isInitialized = true;
  }
}
