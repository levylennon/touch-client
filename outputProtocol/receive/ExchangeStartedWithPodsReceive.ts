/**
 * ExchangeStartedWithPodsMessage — inferred from .on("ExchangeStartedWithPodsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeStartedWithPodsEventName = "ExchangeStartedWithPodsMessage" as const;

export interface ExchangeStartedWithPodsPayload {
  [key: string]: unknown;
}

export class ExchangeStartedWithPodsReceive implements ExchangeStartedWithPodsPayload {
  _messageType = "ExchangeStartedWithPodsMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeStartedWithPodsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeStartedWithPodsMessage" as const;
    this._isInitialized = true;
  }
}
