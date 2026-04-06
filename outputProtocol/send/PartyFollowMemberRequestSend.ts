/**
 * PartyFollowMemberRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PartyFollowMemberRequestMessageType = "PartyFollowMemberRequestMessage" as const;

export interface PartyFollowMemberRequestPayload {
  partyId?: unknown;
  playerId?: unknown;
}

export class PartyFollowMemberRequestSend implements PartyFollowMemberRequestPayload {
  _messageType = "PartyFollowMemberRequestMessage" as const;
  partyId?: unknown;
  playerId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyFollowMemberRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyFollowMemberRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PartyFollowMemberRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PartyFollowMemberRequestPayload;
  }
}
