/**
 * StatedElementUpdatedMessage — inferred from .on("StatedElementUpdatedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const StatedElementUpdatedEventName = "StatedElementUpdatedMessage" as const;

export interface StatedElementUpdatedPayload {
  statedElement?: unknown;
}

export class StatedElementUpdatedReceive implements StatedElementUpdatedPayload {
  _messageType = "StatedElementUpdatedMessage" as const;
  statedElement?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StatedElementUpdatedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StatedElementUpdatedMessage" as const;
    this._isInitialized = true;
  }
}
