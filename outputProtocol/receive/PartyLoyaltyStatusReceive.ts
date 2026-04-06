/**
 * PartyLoyaltyStatusMessage — inferred from .on("PartyLoyaltyStatusMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyLoyaltyStatusEventName = "PartyLoyaltyStatusMessage" as const;

export interface PartyLoyaltyStatusPayload {
  loyal?: unknown;
  partyId?: unknown;
}

export class PartyLoyaltyStatusReceive implements PartyLoyaltyStatusPayload {
  _messageType = "PartyLoyaltyStatusMessage" as const;
  loyal?: unknown;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyLoyaltyStatusPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyLoyaltyStatusMessage" as const;
    this._isInitialized = true;
  }
}
