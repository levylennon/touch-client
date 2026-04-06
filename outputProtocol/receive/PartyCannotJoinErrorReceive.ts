/**
 * PartyCannotJoinErrorMessage — inferred from .on("PartyCannotJoinErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PartyCannotJoinErrorEventName = "PartyCannotJoinErrorMessage" as const;

export interface PartyCannotJoinErrorPayload {
  reason?: unknown;
}

export class PartyCannotJoinErrorReceive implements PartyCannotJoinErrorPayload {
  _messageType = "PartyCannotJoinErrorMessage" as const;
  reason?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PartyCannotJoinErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PartyCannotJoinErrorMessage" as const;
    this._isInitialized = true;
  }
}
