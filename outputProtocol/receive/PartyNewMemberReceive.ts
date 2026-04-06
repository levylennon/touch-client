/**
 * PartyNewMemberMessage — inferred from .on("PartyNewMemberMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyNewMemberEventName = "PartyNewMemberMessage" as const;

export interface PartyNewMemberPayload {
  memberInformations?: unknown;
  partyId?: unknown;
}

export class PartyNewMemberReceive implements PartyNewMemberPayload {
  _messageType = "PartyNewMemberMessage" as const;
  memberInformations?: unknown;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyNewMemberPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyNewMemberMessage" as const;
    this._isInitialized = true;
  }
}
