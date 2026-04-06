/**
 * PartyInvitationArenaRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PartyInvitationArenaRequestMessageType = "PartyInvitationArenaRequestMessage" as const;

export interface PartyInvitationArenaRequestPayload {
  name?: unknown;
}

export class PartyInvitationArenaRequestSend implements PartyInvitationArenaRequestPayload {
  _messageType = "PartyInvitationArenaRequestMessage" as const;
  name?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyInvitationArenaRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyInvitationArenaRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PartyInvitationArenaRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PartyInvitationArenaRequestPayload;
  }
}
