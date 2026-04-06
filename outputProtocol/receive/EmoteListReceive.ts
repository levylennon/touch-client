/**
 * EmoteListMessage — inferred from .on("EmoteListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const EmoteListEventName = "EmoteListMessage" as const;

export interface EmoteListPayload {
  emoteIds?: unknown;
}

export class EmoteListReceive implements EmoteListPayload {
  _messageType = "EmoteListMessage" as const;
  emoteIds?: unknown;
  _isInitialized = false;

  constructor(data: Partial<EmoteListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "EmoteListMessage" as const;
    this._isInitialized = true;
  }
}
