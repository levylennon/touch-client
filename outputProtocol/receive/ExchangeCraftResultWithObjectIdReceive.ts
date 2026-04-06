/**
 * ExchangeCraftResultWithObjectIdMessage — inferred from .on("ExchangeCraftResultWithObjectIdMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeCraftResultWithObjectIdEventName = "ExchangeCraftResultWithObjectIdMessage" as const;

export interface ExchangeCraftResultWithObjectIdPayload {
  [key: string]: unknown;
}

export class ExchangeCraftResultWithObjectIdReceive implements ExchangeCraftResultWithObjectIdPayload {
  _messageType = "ExchangeCraftResultWithObjectIdMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeCraftResultWithObjectIdPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeCraftResultWithObjectIdMessage" as const;
    this._isInitialized = true;
  }
}
