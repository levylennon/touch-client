/**
 * EmoteRemoveMessage — inferred from .on("EmoteRemoveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const EmoteRemoveEventName = "EmoteRemoveMessage" as const;

export interface EmoteRemovePayload {
  emoteId?: unknown;
}

export class EmoteRemoveReceive implements EmoteRemovePayload {
  _messageType = "EmoteRemoveMessage" as const;
  emoteId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<EmoteRemovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "EmoteRemoveMessage" as const;
    this._isInitialized = true;
  }
}
