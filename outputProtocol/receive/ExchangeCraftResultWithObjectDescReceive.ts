/**
 * ExchangeCraftResultWithObjectDescMessage — inferred from .on("ExchangeCraftResultWithObjectDescMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeCraftResultWithObjectDescEventName = "ExchangeCraftResultWithObjectDescMessage" as const;

export interface ExchangeCraftResultWithObjectDescPayload {
  [key: string]: unknown;
}

export class ExchangeCraftResultWithObjectDescReceive implements ExchangeCraftResultWithObjectDescPayload {
  _messageType = "ExchangeCraftResultWithObjectDescMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeCraftResultWithObjectDescPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeCraftResultWithObjectDescMessage" as const;
    this._isInitialized = true;
  }
}
