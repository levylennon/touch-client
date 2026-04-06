/**
 * ExchangeItemAutoCraftRemainingMessage — inferred from .on("ExchangeItemAutoCraftRemainingMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeItemAutoCraftRemainingEventName = "ExchangeItemAutoCraftRemainingMessage" as const;

export interface ExchangeItemAutoCraftRemainingPayload {
  [key: string]: unknown;
}

export class ExchangeItemAutoCraftRemainingReceive implements ExchangeItemAutoCraftRemainingPayload {
  _messageType = "ExchangeItemAutoCraftRemainingMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeItemAutoCraftRemainingPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeItemAutoCraftRemainingMessage" as const;
    this._isInitialized = true;
  }
}
