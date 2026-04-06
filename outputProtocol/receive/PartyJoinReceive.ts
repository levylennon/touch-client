/**
 * PartyJoinMessage — inferred from .on("PartyJoinMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyJoinEventName = "PartyJoinMessage" as const;

export interface PartyJoinPayload {
  guests?: unknown;
  members?: unknown;
  partyId?: unknown;
  partyLeaderId?: unknown;
  partyType?: unknown;
}

export class PartyJoinReceive implements PartyJoinPayload {
  _messageType = "PartyJoinMessage" as const;
  guests?: unknown;
  members?: unknown;
  partyId?: unknown;
  partyLeaderId?: unknown;
  partyType?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyJoinPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyJoinMessage" as const;
    this._isInitialized = true;
  }
}
