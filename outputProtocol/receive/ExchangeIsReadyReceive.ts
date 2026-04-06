/**
 * ExchangeIsReadyMessage — inferred from .on("ExchangeIsReadyMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeIsReadyEventName = "ExchangeIsReadyMessage" as const;

export interface ExchangeIsReadyPayload {
  [key: string]: unknown;
}

export class ExchangeIsReadyReceive implements ExchangeIsReadyPayload {
  _messageType = "ExchangeIsReadyMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeIsReadyPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeIsReadyMessage" as const;
    this._isInitialized = true;
  }
}
