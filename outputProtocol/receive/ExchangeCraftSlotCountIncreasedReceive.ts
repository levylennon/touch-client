/**
 * ExchangeCraftSlotCountIncreasedMessage — inferred from .on("ExchangeCraftSlotCountIncreasedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeCraftSlotCountIncreasedEventName = "ExchangeCraftSlotCountIncreasedMessage" as const;

export interface ExchangeCraftSlotCountIncreasedPayload {
  [key: string]: unknown;
}

export class ExchangeCraftSlotCountIncreasedReceive implements ExchangeCraftSlotCountIncreasedPayload {
  _messageType = "ExchangeCraftSlotCountIncreasedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeCraftSlotCountIncreasedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeCraftSlotCountIncreasedMessage" as const;
    this._isInitialized = true;
  }
}
