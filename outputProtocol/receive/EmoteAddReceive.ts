/**
 * EmoteAddMessage — inferred from .on("EmoteAddMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const EmoteAddEventName = "EmoteAddMessage" as const;

export interface EmoteAddPayload {
  emoteId?: unknown;
}

export class EmoteAddReceive implements EmoteAddPayload {
  _messageType = "EmoteAddMessage" as const;
  emoteId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<EmoteAddPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "EmoteAddMessage" as const;
    this._isInitialized = true;
  }
}
