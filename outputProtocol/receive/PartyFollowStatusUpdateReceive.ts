/**
 * PartyFollowStatusUpdateMessage — inferred from .on("PartyFollowStatusUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyFollowStatusUpdateEventName = "PartyFollowStatusUpdateMessage" as const;

export interface PartyFollowStatusUpdatePayload {
  followedId?: unknown;
  partyId?: unknown;
  success?: unknown;
}

export class PartyFollowStatusUpdateReceive implements PartyFollowStatusUpdatePayload {
  _messageType = "PartyFollowStatusUpdateMessage" as const;
  followedId?: unknown;
  partyId?: unknown;
  success?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyFollowStatusUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyFollowStatusUpdateMessage" as const;
    this._isInitialized = true;
  }
}
