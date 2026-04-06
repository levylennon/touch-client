/**
 * PartyMemberEjectedMessage — inferred from .on("PartyMemberEjectedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyMemberEjectedEventName = "PartyMemberEjectedMessage" as const;

export interface PartyMemberEjectedPayload {
  kickerId?: unknown;
  leavingPlayerId?: unknown;
  partyId?: unknown;
}

export class PartyMemberEjectedReceive implements PartyMemberEjectedPayload {
  _messageType = "PartyMemberEjectedMessage" as const;
  kickerId?: unknown;
  leavingPlayerId?: unknown;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyMemberEjectedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyMemberEjectedMessage" as const;
    this._isInitialized = true;
  }
}
