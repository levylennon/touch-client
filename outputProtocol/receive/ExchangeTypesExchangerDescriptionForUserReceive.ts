/**
 * ExchangeTypesExchangerDescriptionForUserMessage — inferred from .on("ExchangeTypesExchangerDescriptionForUserMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeTypesExchangerDescriptionForUserEventName = "ExchangeTypesExchangerDescriptionForUserMessage" as const;

export interface ExchangeTypesExchangerDescriptionForUserPayload {
  typeDescription?: unknown;
}

export class ExchangeTypesExchangerDescriptionForUserReceive implements ExchangeTypesExchangerDescriptionForUserPayload {
  _messageType = "ExchangeTypesExchangerDescriptionForUserMessage" as const;
  typeDescription?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeTypesExchangerDescriptionForUserPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeTypesExchangerDescriptionForUserMessage" as const;
    this._isInitialized = true;
  }
}
