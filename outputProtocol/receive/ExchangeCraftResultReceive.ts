/**
 * ExchangeCraftResultMessage — inferred from .on("ExchangeCraftResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeCraftResultEventName = "ExchangeCraftResultMessage" as const;

export interface ExchangeCraftResultPayload {
  [key: string]: unknown;
}

export class ExchangeCraftResultReceive implements ExchangeCraftResultPayload {
  _messageType = "ExchangeCraftResultMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeCraftResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeCraftResultMessage" as const;
    this._isInitialized = true;
  }
}
