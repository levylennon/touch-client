/**
 * IgnoredAddFailureMessage — inferred from .on("IgnoredAddFailureMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const IgnoredAddFailureEventName = "IgnoredAddFailureMessage" as const;

export interface IgnoredAddFailurePayload {
  reason?: unknown;
}

export class IgnoredAddFailureReceive implements IgnoredAddFailurePayload {
  _messageType = "IgnoredAddFailureMessage" as const;
  reason?: unknown;
  _isInitialized = false;

  constructor(data: Partial<IgnoredAddFailurePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "IgnoredAddFailureMessage" as const;
    this._isInitialized = true;
  }
}
