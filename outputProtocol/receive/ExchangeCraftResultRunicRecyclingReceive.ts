/**
 * ExchangeCraftResultRunicRecyclingMessage — inferred from .on("ExchangeCraftResultRunicRecyclingMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeCraftResultRunicRecyclingEventName = "ExchangeCraftResultRunicRecyclingMessage" as const;

export interface ExchangeCraftResultRunicRecyclingPayload {
  [key: string]: unknown;
}

export class ExchangeCraftResultRunicRecyclingReceive implements ExchangeCraftResultRunicRecyclingPayload {
  _messageType = "ExchangeCraftResultRunicRecyclingMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeCraftResultRunicRecyclingPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeCraftResultRunicRecyclingMessage" as const;
    this._isInitialized = true;
  }
}
