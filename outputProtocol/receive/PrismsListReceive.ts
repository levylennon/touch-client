/**
 * PrismsListMessage — inferred from .on("PrismsListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PrismsListEventName = "PrismsListMessage" as const;

export interface PrismsListPayload {
  prisms?: unknown;
}

export class PrismsListReceive implements PrismsListPayload {
  _messageType = "PrismsListMessage" as const;
  prisms?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismsListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismsListMessage" as const;
    this._isInitialized = true;
  }
}
