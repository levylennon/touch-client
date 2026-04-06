/**
 * PartyRefuseInvitationMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PartyRefuseInvitationMessageType = "PartyRefuseInvitationMessage" as const;

export interface PartyRefuseInvitationPayload {
  partyId?: unknown;
}

export class PartyRefuseInvitationSend implements PartyRefuseInvitationPayload {
  _messageType = "PartyRefuseInvitationMessage" as const;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyRefuseInvitationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyRefuseInvitationMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PartyRefuseInvitationPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PartyRefuseInvitationPayload;
  }
}
