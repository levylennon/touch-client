/**
 * PartyUpdateLightMessage — inferred from .on("PartyUpdateLightMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyUpdateLightEventName = "PartyUpdateLightMessage" as const;

export interface PartyUpdateLightPayload {
  id?: unknown;
  lifePoints?: unknown;
  maxLifePoints?: unknown;
  partyId?: unknown;
}

export class PartyUpdateLightReceive implements PartyUpdateLightPayload {
  _messageType = "PartyUpdateLightMessage" as const;
  id?: unknown;
  lifePoints?: unknown;
  maxLifePoints?: unknown;
  partyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyUpdateLightPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyUpdateLightMessage" as const;
    this._isInitialized = true;
  }
}
