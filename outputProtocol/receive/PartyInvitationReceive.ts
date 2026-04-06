/**
 * PartyInvitationMessage — inferred from .on("PartyInvitationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyInvitationEventName = "PartyInvitationMessage" as const;

export interface PartyInvitationPayload {
  fromName?: unknown;
  partyId?: unknown;
  partyType?: unknown;
}

export class PartyInvitationReceive implements PartyInvitationPayload {
  _messageType = "PartyInvitationMessage" as const;
  fromName?: unknown;
  partyId?: unknown;
  partyType?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyInvitationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyInvitationMessage" as const;
    this._isInitialized = true;
  }
}
