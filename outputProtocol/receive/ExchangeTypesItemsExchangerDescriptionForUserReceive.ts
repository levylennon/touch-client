/**
 * ExchangeTypesItemsExchangerDescriptionForUserMessage — inferred from .on("ExchangeTypesItemsExchangerDescriptionForUserMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeTypesItemsExchangerDescriptionForUserEventName = "ExchangeTypesItemsExchangerDescriptionForUserMessage" as const;

export interface ExchangeTypesItemsExchangerDescriptionForUserPayload {
  itemTypeDescriptions?: unknown;
}

export class ExchangeTypesItemsExchangerDescriptionForUserReceive implements ExchangeTypesItemsExchangerDescriptionForUserPayload {
  _messageType = "ExchangeTypesItemsExchangerDescriptionForUserMessage" as const;
  itemTypeDescriptions?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeTypesItemsExchangerDescriptionForUserPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeTypesItemsExchangerDescriptionForUserMessage" as const;
    this._isInitialized = true;
  }
}
