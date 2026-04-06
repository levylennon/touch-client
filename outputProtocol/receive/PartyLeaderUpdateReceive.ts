/**
 * PartyLeaderUpdateMessage — inferred from .on("PartyLeaderUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyLeaderUpdateEventName = "PartyLeaderUpdateMessage" as const;

export interface PartyLeaderUpdatePayload {
  partyId?: unknown;
  partyLeaderId?: unknown;
}

export class PartyLeaderUpdateReceive implements PartyLeaderUpdatePayload {
  _messageType = "PartyLeaderUpdateMessage" as const;
  partyId?: unknown;
  partyLeaderId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyLeaderUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyLeaderUpdateMessage" as const;
    this._isInitialized = true;
  }
}
