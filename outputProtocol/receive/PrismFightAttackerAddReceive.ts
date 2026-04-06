/**
 * PrismFightAttackerAddMessage — inferred from .on("PrismFightAttackerAddMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PrismFightAttackerAddEventName = "PrismFightAttackerAddMessage" as const;

export interface PrismFightAttackerAddPayload {
  attacker?: unknown;
  subAreaId?: unknown;
}

export class PrismFightAttackerAddReceive implements PrismFightAttackerAddPayload {
  _messageType = "PrismFightAttackerAddMessage" as const;
  attacker?: unknown;
  subAreaId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismFightAttackerAddPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismFightAttackerAddMessage" as const;
    this._isInitialized = true;
  }
}
