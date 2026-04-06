/**
 * IgnoredAddedMessage — inferred from .on("IgnoredAddedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const IgnoredAddedEventName = "IgnoredAddedMessage" as const;

export interface IgnoredAddedPayload {
  ignoreAdded?: {
    accountId?: unknown;
  };
  session?: unknown;
}

export class IgnoredAddedReceive implements IgnoredAddedPayload {
  _messageType = "IgnoredAddedMessage" as const;
  ignoreAdded?: {
    accountId?: unknown;
  };
  session?: unknown;
  _isInitialized = false;

  constructor(data: Partial<IgnoredAddedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "IgnoredAddedMessage" as const;
    this._isInitialized = true;
  }
}
