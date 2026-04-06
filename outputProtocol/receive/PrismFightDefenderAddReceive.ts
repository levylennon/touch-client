/**
 * PrismFightDefenderAddMessage — inferred from .on("PrismFightDefenderAddMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PrismFightDefenderAddEventName = "PrismFightDefenderAddMessage" as const;

export interface PrismFightDefenderAddPayload {
  defender?: unknown;
  subAreaId?: unknown;
}

export class PrismFightDefenderAddReceive implements PrismFightDefenderAddPayload {
  _messageType = "PrismFightDefenderAddMessage" as const;
  defender?: unknown;
  subAreaId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismFightDefenderAddPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismFightDefenderAddMessage" as const;
    this._isInitialized = true;
  }
}
