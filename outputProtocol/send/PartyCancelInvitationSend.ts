/**
 * PartyCancelInvitationMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PartyCancelInvitationMessageType = "PartyCancelInvitationMessage" as const;

export interface PartyCancelInvitationPayload {
  guestId?: unknown;
  partyId?: unknown;
}

export class PartyCancelInvitationSend implements PartyCancelInvitationPayload {
  _messageType = "PartyCancelInvitationMessage" as const;
  guestId?: unknown;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyCancelInvitationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyCancelInvitationMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PartyCancelInvitationPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PartyCancelInvitationPayload;
  }
}
