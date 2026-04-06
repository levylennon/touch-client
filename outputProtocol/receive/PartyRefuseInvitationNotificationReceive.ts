/**
 * PartyRefuseInvitationNotificationMessage — inferred from .on("PartyRefuseInvitationNotificationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyRefuseInvitationNotificationEventName = "PartyRefuseInvitationNotificationMessage" as const;

export interface PartyRefuseInvitationNotificationPayload {
  guestId?: unknown;
  partyId?: unknown;
}

export class PartyRefuseInvitationNotificationReceive implements PartyRefuseInvitationNotificationPayload {
  _messageType = "PartyRefuseInvitationNotificationMessage" as const;
  guestId?: unknown;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyRefuseInvitationNotificationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyRefuseInvitationNotificationMessage" as const;
    this._isInitialized = true;
  }
}
