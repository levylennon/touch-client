/**
 * PartyMemberRemoveMessage — inferred from .on("PartyMemberRemoveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyMemberRemoveEventName = "PartyMemberRemoveMessage" as const;

export interface PartyMemberRemovePayload {
  leavingPlayerId?: unknown;
  partyId?: unknown;
}

export class PartyMemberRemoveReceive implements PartyMemberRemovePayload {
  _messageType = "PartyMemberRemoveMessage" as const;
  leavingPlayerId?: unknown;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyMemberRemovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyMemberRemoveMessage" as const;
    this._isInitialized = true;
  }
}
