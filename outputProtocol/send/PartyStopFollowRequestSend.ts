/**
 * PartyStopFollowRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PartyStopFollowRequestMessageType = "PartyStopFollowRequestMessage" as const;

export interface PartyStopFollowRequestPayload {
  partyId?: unknown;
}

export class PartyStopFollowRequestSend implements PartyStopFollowRequestPayload {
  _messageType = "PartyStopFollowRequestMessage" as const;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyStopFollowRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyStopFollowRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PartyStopFollowRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PartyStopFollowRequestPayload;
  }
}
