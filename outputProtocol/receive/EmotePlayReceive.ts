/**
 * EmotePlayMessage — inferred from .on("EmotePlayMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const EmotePlayEventName = "EmotePlayMessage" as const;

export interface EmotePlayPayload {
  [key: string]: unknown;
}

export class EmotePlayReceive implements EmotePlayPayload {
  _messageType = "EmotePlayMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<EmotePlayPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "EmotePlayMessage" as const;
    this._isInitialized = true;
  }
}
