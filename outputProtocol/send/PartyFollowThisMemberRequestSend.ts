/**
 * PartyFollowThisMemberRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PartyFollowThisMemberRequestMessageType = "PartyFollowThisMemberRequestMessage" as const;

export interface PartyFollowThisMemberRequestPayload {
  enabled?: unknown;
  partyId?: unknown;
  playerId?: unknown;
}

export class PartyFollowThisMemberRequestSend implements PartyFollowThisMemberRequestPayload {
  _messageType = "PartyFollowThisMemberRequestMessage" as const;
  enabled?: unknown;
  partyId?: unknown;
  playerId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyFollowThisMemberRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyFollowThisMemberRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PartyFollowThisMemberRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PartyFollowThisMemberRequestPayload;
  }
}
