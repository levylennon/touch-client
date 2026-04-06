/**
 * PartyInvitationDetailsMessage — inferred from .on("PartyInvitationDetailsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyInvitationDetailsEventName = "PartyInvitationDetailsMessage" as const;

export interface PartyInvitationDetailsPayload {
  guests?: {
    length?: unknown;
  };
}

export class PartyInvitationDetailsReceive implements PartyInvitationDetailsPayload {
  _messageType = "PartyInvitationDetailsMessage" as const;
  guests?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<PartyInvitationDetailsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyInvitationDetailsMessage" as const;
    this._isInitialized = true;
  }
}
