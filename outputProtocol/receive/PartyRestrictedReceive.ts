/**
 * PartyRestrictedMessage — inferred from .on("PartyRestrictedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyRestrictedEventName = "PartyRestrictedMessage" as const;

export interface PartyRestrictedPayload {
  partyId?: unknown;
  restricted?: unknown;
}

export class PartyRestrictedReceive implements PartyRestrictedPayload {
  _messageType = "PartyRestrictedMessage" as const;
  partyId?: unknown;
  restricted?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyRestrictedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyRestrictedMessage" as const;
    this._isInitialized = true;
  }
}
