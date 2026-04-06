/**
 * DailyQuestsRerollQuantityMessage — inferred from .on("DailyQuestsRerollQuantityMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const DailyQuestsRerollQuantityEventName = "DailyQuestsRerollQuantityMessage" as const;

export interface DailyQuestsRerollQuantityPayload {
  free?: unknown;
  premium?: unknown;
}

export class DailyQuestsRerollQuantityReceive implements DailyQuestsRerollQuantityPayload {
  _messageType = "DailyQuestsRerollQuantityMessage" as const;
  free?: unknown;
  premium?: unknown;
  _isInitialized = false;

  constructor(data: Partial<DailyQuestsRerollQuantityPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "DailyQuestsRerollQuantityMessage" as const;
    this._isInitialized = true;
  }
}
