/**
 * ExchangeMountStableAddMessage — inferred from .on("ExchangeMountStableAddMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeMountStableAddEventName = "ExchangeMountStableAddMessage" as const;

export interface ExchangeMountStableAddPayload {
  [key: string]: unknown;
}

export class ExchangeMountStableAddReceive implements ExchangeMountStableAddPayload {
  _messageType = "ExchangeMountStableAddMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeMountStableAddPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeMountStableAddMessage" as const;
    this._isInitialized = true;
  }
}
