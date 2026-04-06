/**
 * PartyAcceptInvitationMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PartyAcceptInvitationMessageType = "PartyAcceptInvitationMessage" as const;

export interface PartyAcceptInvitationPayload {
  partyId?: unknown;
}

export class PartyAcceptInvitationSend implements PartyAcceptInvitationPayload {
  _messageType = "PartyAcceptInvitationMessage" as const;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyAcceptInvitationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyAcceptInvitationMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PartyAcceptInvitationPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PartyAcceptInvitationPayload;
  }
}
