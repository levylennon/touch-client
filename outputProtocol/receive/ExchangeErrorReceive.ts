/**
 * ExchangeErrorMessage — inferred from .on("ExchangeErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeErrorEventName = "ExchangeErrorMessage" as const;

export interface ExchangeErrorPayload {
  errorType?: unknown;
}

export class ExchangeErrorReceive implements ExchangeErrorPayload {
  _messageType = "ExchangeErrorMessage" as const;
  errorType?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeErrorMessage" as const;
    this._isInitialized = true;
  }
}
