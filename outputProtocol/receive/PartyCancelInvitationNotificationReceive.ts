/**
 * PartyCancelInvitationNotificationMessage — inferred from .on("PartyCancelInvitationNotificationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyCancelInvitationNotificationEventName = "PartyCancelInvitationNotificationMessage" as const;

export interface PartyCancelInvitationNotificationPayload {
  cancelerId?: unknown;
  guestId?: unknown;
  partyId?: unknown;
}

export class PartyCancelInvitationNotificationReceive implements PartyCancelInvitationNotificationPayload {
  _messageType = "PartyCancelInvitationNotificationMessage" as const;
  cancelerId?: unknown;
  guestId?: unknown;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyCancelInvitationNotificationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyCancelInvitationNotificationMessage" as const;
    this._isInitialized = true;
  }
}
