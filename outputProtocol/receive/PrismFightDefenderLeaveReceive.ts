/**
 * PrismFightDefenderLeaveMessage — inferred from .on("PrismFightDefenderLeaveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PrismFightDefenderLeaveEventName = "PrismFightDefenderLeaveMessage" as const;

export interface PrismFightDefenderLeavePayload {
  fighterToRemoveId?: unknown;
  subAreaId?: unknown;
}

export class PrismFightDefenderLeaveReceive implements PrismFightDefenderLeavePayload {
  _messageType = "PrismFightDefenderLeaveMessage" as const;
  fighterToRemoveId?: unknown;
  subAreaId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismFightDefenderLeavePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismFightDefenderLeaveMessage" as const;
    this._isInitialized = true;
  }
}
