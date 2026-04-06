/**
 * PartyInvitationCancelledForGuestMessage — inferred from .on("PartyInvitationCancelledForGuestMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyInvitationCancelledForGuestEventName = "PartyInvitationCancelledForGuestMessage" as const;

export interface PartyInvitationCancelledForGuestPayload {
  cancelerId?: unknown;
  partyId?: unknown;
}

export class PartyInvitationCancelledForGuestReceive implements PartyInvitationCancelledForGuestPayload {
  _messageType = "PartyInvitationCancelledForGuestMessage" as const;
  cancelerId?: unknown;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyInvitationCancelledForGuestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyInvitationCancelledForGuestMessage" as const;
    this._isInitialized = true;
  }
}
