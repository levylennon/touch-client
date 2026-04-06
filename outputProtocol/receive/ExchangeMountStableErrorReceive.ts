/**
 * ExchangeMountStableErrorMessage — inferred from .on("ExchangeMountStableErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeMountStableErrorEventName = "ExchangeMountStableErrorMessage" as const;

export interface ExchangeMountStableErrorPayload {
  [key: string]: unknown;
}

export class ExchangeMountStableErrorReceive implements ExchangeMountStableErrorPayload {
  _messageType = "ExchangeMountStableErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeMountStableErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeMountStableErrorMessage" as const;
    this._isInitialized = true;
  }
}
