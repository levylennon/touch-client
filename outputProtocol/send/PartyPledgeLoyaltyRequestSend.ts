/**
 * PartyPledgeLoyaltyRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PartyPledgeLoyaltyRequestMessageType = "PartyPledgeLoyaltyRequestMessage" as const;

export interface PartyPledgeLoyaltyRequestPayload {
  loyal?: unknown;
  partyId?: unknown;
}

export class PartyPledgeLoyaltyRequestSend implements PartyPledgeLoyaltyRequestPayload {
  _messageType = "PartyPledgeLoyaltyRequestMessage" as const;
  loyal?: unknown;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyPledgeLoyaltyRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyPledgeLoyaltyRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PartyPledgeLoyaltyRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PartyPledgeLoyaltyRequestPayload;
  }
}
