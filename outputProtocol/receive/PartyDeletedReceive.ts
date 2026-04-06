/**
 * PartyDeletedMessage — inferred from .on("PartyDeletedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyDeletedEventName = "PartyDeletedMessage" as const;

export interface PartyDeletedPayload {
  partyId?: unknown;
}

export class PartyDeletedReceive implements PartyDeletedPayload {
  _messageType = "PartyDeletedMessage" as const;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyDeletedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyDeletedMessage" as const;
    this._isInitialized = true;
  }
}
