/**
 * IgnoredListMessage — inferred from .on("IgnoredListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const IgnoredListEventName = "IgnoredListMessage" as const;

export interface IgnoredListPayload {
  ignoredList?: unknown;
}

export class IgnoredListReceive implements IgnoredListPayload {
  _messageType = "IgnoredListMessage" as const;
  ignoredList?: unknown;
  _isInitialized = false;

  constructor(data: Partial<IgnoredListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "IgnoredListMessage" as const;
    this._isInitialized = true;
  }
}
