/**
 * PartyKickRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PartyKickRequestMessageType = "PartyKickRequestMessage" as const;

export interface PartyKickRequestPayload {
  partyId?: unknown;
  playerId?: unknown;
}

export class PartyKickRequestSend implements PartyKickRequestPayload {
  _messageType = "PartyKickRequestMessage" as const;
  partyId?: unknown;
  playerId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyKickRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyKickRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PartyKickRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PartyKickRequestPayload;
  }
}
