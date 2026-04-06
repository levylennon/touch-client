/**
 * ExchangeStartOkCraftWithInformationMessage — inferred from .on("ExchangeStartOkCraftWithInformationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeStartOkCraftWithInformationEventName = "ExchangeStartOkCraftWithInformationMessage" as const;

export interface ExchangeStartOkCraftWithInformationPayload {
  [key: string]: unknown;
}

export class ExchangeStartOkCraftWithInformationReceive implements ExchangeStartOkCraftWithInformationPayload {
  _messageType = "ExchangeStartOkCraftWithInformationMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeStartOkCraftWithInformationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeStartOkCraftWithInformationMessage" as const;
    this._isInitialized = true;
  }
}
