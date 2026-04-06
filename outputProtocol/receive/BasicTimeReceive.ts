/**
 * BasicTimeMessage — inferred from .on("BasicTimeMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const BasicTimeEventName = "BasicTimeMessage" as const;

export interface BasicTimePayload {
  timestamp?: unknown;
  timezoneOffset?: unknown;
}

export class BasicTimeReceive implements BasicTimePayload {
  _messageType = "BasicTimeMessage" as const;
  timestamp?: unknown;
  timezoneOffset?: unknown;
  _isInitialized = false;

  constructor(data: Partial<BasicTimePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "BasicTimeMessage" as const;
    this._isInitialized = true;
  }
}
