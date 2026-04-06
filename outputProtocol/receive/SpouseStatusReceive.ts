/**
 * SpouseStatusMessage — inferred from .on("SpouseStatusMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SpouseStatusEventName = "SpouseStatusMessage" as const;

export interface SpouseStatusPayload {
  hasSpouse?: unknown;
}

export class SpouseStatusReceive implements SpouseStatusPayload {
  _messageType = "SpouseStatusMessage" as const;
  hasSpouse?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SpouseStatusPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SpouseStatusMessage" as const;
    this._isInitialized = true;
  }
}
