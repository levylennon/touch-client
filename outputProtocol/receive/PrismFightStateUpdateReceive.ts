/**
 * PrismFightStateUpdateMessage — inferred from .on("PrismFightStateUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PrismFightStateUpdateEventName = "PrismFightStateUpdateMessage" as const;

export interface PrismFightStateUpdatePayload {
  [key: string]: unknown;
}

export class PrismFightStateUpdateReceive implements PrismFightStateUpdatePayload {
  _messageType = "PrismFightStateUpdateMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismFightStateUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismFightStateUpdateMessage" as const;
    this._isInitialized = true;
  }
}
