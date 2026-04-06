/**
 * PartyLeaveMessage — inferred from .on("PartyLeaveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyLeaveEventName = "PartyLeaveMessage" as const;

export interface PartyLeavePayload {
  partyId?: unknown;
}

export class PartyLeaveReceive implements PartyLeavePayload {
  _messageType = "PartyLeaveMessage" as const;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyLeavePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyLeaveMessage" as const;
    this._isInitialized = true;
  }
}
