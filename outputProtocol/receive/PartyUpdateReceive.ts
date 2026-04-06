/**
 * PartyUpdateMessage — inferred from .on("PartyUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyUpdateEventName = "PartyUpdateMessage" as const;

export interface PartyUpdatePayload {
  memberInformations?: unknown;
  partyId?: unknown;
}

export class PartyUpdateReceive implements PartyUpdatePayload {
  _messageType = "PartyUpdateMessage" as const;
  memberInformations?: unknown;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyUpdateMessage" as const;
    this._isInitialized = true;
  }
}
