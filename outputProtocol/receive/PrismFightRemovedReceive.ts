/**
 * PrismFightRemovedMessage — inferred from .on("PrismFightRemovedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PrismFightRemovedEventName = "PrismFightRemovedMessage" as const;

export interface PrismFightRemovedPayload {
  subAreaId?: unknown;
}

export class PrismFightRemovedReceive implements PrismFightRemovedPayload {
  _messageType = "PrismFightRemovedMessage" as const;
  subAreaId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismFightRemovedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismFightRemovedMessage" as const;
    this._isInitialized = true;
  }
}
