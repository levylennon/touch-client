/**
 * ExchangeWeightMessage — inferred from .on("ExchangeWeightMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeWeightEventName = "ExchangeWeightMessage" as const;

export interface ExchangeWeightPayload {
  currentWeight?: unknown;
  maxWeight?: unknown;
}

export class ExchangeWeightReceive implements ExchangeWeightPayload {
  _messageType = "ExchangeWeightMessage" as const;
  currentWeight?: unknown;
  maxWeight?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeWeightPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeWeightMessage" as const;
    this._isInitialized = true;
  }
}
