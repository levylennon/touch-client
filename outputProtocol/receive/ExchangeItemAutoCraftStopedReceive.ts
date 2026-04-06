/**
 * ExchangeItemAutoCraftStopedMessage — inferred from .on("ExchangeItemAutoCraftStopedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeItemAutoCraftStopedEventName = "ExchangeItemAutoCraftStopedMessage" as const;

export interface ExchangeItemAutoCraftStopedPayload {
  [key: string]: unknown;
}

export class ExchangeItemAutoCraftStopedReceive implements ExchangeItemAutoCraftStopedPayload {
  _messageType = "ExchangeItemAutoCraftStopedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeItemAutoCraftStopedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeItemAutoCraftStopedMessage" as const;
    this._isInitialized = true;
  }
}
