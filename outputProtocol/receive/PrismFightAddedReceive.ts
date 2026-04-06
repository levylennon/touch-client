/**
 * PrismFightAddedMessage — inferred from .on("PrismFightAddedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PrismFightAddedEventName = "PrismFightAddedMessage" as const;

export interface PrismFightAddedPayload {
  fight?: unknown;
}

export class PrismFightAddedReceive implements PrismFightAddedPayload {
  _messageType = "PrismFightAddedMessage" as const;
  fight?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismFightAddedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismFightAddedMessage" as const;
    this._isInitialized = true;
  }
}
