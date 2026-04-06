/**
 * PrismsListUpdateMessage — inferred from .on("PrismsListUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PrismsListUpdateEventName = "PrismsListUpdateMessage" as const;

export interface PrismsListUpdatePayload {
  prisms?: unknown;
}

export class PrismsListUpdateReceive implements PrismsListUpdatePayload {
  _messageType = "PrismsListUpdateMessage" as const;
  prisms?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismsListUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismsListUpdateMessage" as const;
    this._isInitialized = true;
  }
}
