/**
 * PartyInvitationRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PartyInvitationRequestMessageType = "PartyInvitationRequestMessage" as const;

export interface PartyInvitationRequestPayload {
  name?: unknown;
}

export class PartyInvitationRequestSend implements PartyInvitationRequestPayload {
  _messageType = "PartyInvitationRequestMessage" as const;
  name?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyInvitationRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyInvitationRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PartyInvitationRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PartyInvitationRequestPayload;
  }
}
