/**
 * PartyNewGuestMessage — inferred from .on("PartyNewGuestMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyNewGuestEventName = "PartyNewGuestMessage" as const;

export interface PartyNewGuestPayload {
  guest?: unknown;
  partyId?: unknown;
}

export class PartyNewGuestReceive implements PartyNewGuestPayload {
  _messageType = "PartyNewGuestMessage" as const;
  guest?: unknown;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyNewGuestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyNewGuestMessage" as const;
    this._isInitialized = true;
  }
}
