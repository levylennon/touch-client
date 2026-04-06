/**
 * PartyKickedByMessage — inferred from .on("PartyKickedByMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyKickedByEventName = "PartyKickedByMessage" as const;

export interface PartyKickedByPayload {
  kickerId?: unknown;
  partyId?: unknown;
}

export class PartyKickedByReceive implements PartyKickedByPayload {
  _messageType = "PartyKickedByMessage" as const;
  kickerId?: unknown;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyKickedByPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyKickedByMessage" as const;
    this._isInitialized = true;
  }
}
