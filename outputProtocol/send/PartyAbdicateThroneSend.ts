/**
 * PartyAbdicateThroneMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PartyAbdicateThroneMessageType = "PartyAbdicateThroneMessage" as const;

export interface PartyAbdicateThronePayload {
  partyId?: unknown;
  playerId?: unknown;
}

export class PartyAbdicateThroneSend implements PartyAbdicateThronePayload {
  _messageType = "PartyAbdicateThroneMessage" as const;
  partyId?: unknown;
  playerId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyAbdicateThronePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyAbdicateThroneMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PartyAbdicateThronePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PartyAbdicateThronePayload;
  }
}
