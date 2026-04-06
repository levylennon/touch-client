/**
 * ExchangeStartOkJobIndexMessage — inferred from .on("ExchangeStartOkJobIndexMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeStartOkJobIndexEventName = "ExchangeStartOkJobIndexMessage" as const;

export interface ExchangeStartOkJobIndexPayload {
  [key: string]: unknown;
}

export class ExchangeStartOkJobIndexReceive implements ExchangeStartOkJobIndexPayload {
  _messageType = "ExchangeStartOkJobIndexMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeStartOkJobIndexPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeStartOkJobIndexMessage" as const;
    this._isInitialized = true;
  }
}
