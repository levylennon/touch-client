/**
 * ExchangeCraftResultMagicWithObjectDescMessage — inferred from .on("ExchangeCraftResultMagicWithObjectDescMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeCraftResultMagicWithObjectDescEventName = "ExchangeCraftResultMagicWithObjectDescMessage" as const;

export interface ExchangeCraftResultMagicWithObjectDescPayload {
  [key: string]: unknown;
}

export class ExchangeCraftResultMagicWithObjectDescReceive implements ExchangeCraftResultMagicWithObjectDescPayload {
  _messageType = "ExchangeCraftResultMagicWithObjectDescMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeCraftResultMagicWithObjectDescPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeCraftResultMagicWithObjectDescMessage" as const;
    this._isInitialized = true;
  }
}
