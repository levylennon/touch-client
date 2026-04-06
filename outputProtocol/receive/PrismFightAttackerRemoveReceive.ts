/**
 * PrismFightAttackerRemoveMessage — inferred from .on("PrismFightAttackerRemoveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PrismFightAttackerRemoveEventName = "PrismFightAttackerRemoveMessage" as const;

export interface PrismFightAttackerRemovePayload {
  fighterToRemoveId?: unknown;
  subAreaId?: unknown;
}

export class PrismFightAttackerRemoveReceive implements PrismFightAttackerRemovePayload {
  _messageType = "PrismFightAttackerRemoveMessage" as const;
  fighterToRemoveId?: unknown;
  subAreaId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismFightAttackerRemovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismFightAttackerRemoveMessage" as const;
    this._isInitialized = true;
  }
}
