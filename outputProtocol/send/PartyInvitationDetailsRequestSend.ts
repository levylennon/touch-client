/**
 * PartyInvitationDetailsRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PartyInvitationDetailsRequestMessageType = "PartyInvitationDetailsRequestMessage" as const;

export interface PartyInvitationDetailsRequestPayload {
  partyId?: unknown;
}

export class PartyInvitationDetailsRequestSend implements PartyInvitationDetailsRequestPayload {
  _messageType = "PartyInvitationDetailsRequestMessage" as const;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyInvitationDetailsRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyInvitationDetailsRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PartyInvitationDetailsRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PartyInvitationDetailsRequestPayload;
  }
}
