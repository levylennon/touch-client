/**
 * EmotePlayRelookedMessage — inferred from .on("EmotePlayRelookedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const EmotePlayRelookedEventName = "EmotePlayRelookedMessage" as const;

export interface EmotePlayRelookedPayload {
  [key: string]: unknown;
}

export class EmotePlayRelookedReceive implements EmotePlayRelookedPayload {
  _messageType = "EmotePlayRelookedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<EmotePlayRelookedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "EmotePlayRelookedMessage" as const;
    this._isInitialized = true;
  }
}
