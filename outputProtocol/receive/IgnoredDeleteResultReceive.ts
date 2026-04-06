/**
 * IgnoredDeleteResultMessage — inferred from .on("IgnoredDeleteResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const IgnoredDeleteResultEventName = "IgnoredDeleteResultMessage" as const;

export interface IgnoredDeleteResultPayload {
  name?: unknown;
  session?: unknown;
  success?: unknown;
}

export class IgnoredDeleteResultReceive implements IgnoredDeleteResultPayload {
  _messageType = "IgnoredDeleteResultMessage" as const;
  name?: unknown;
  session?: unknown;
  success?: unknown;
  _isInitialized = false;

  constructor(data: Partial<IgnoredDeleteResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "IgnoredDeleteResultMessage" as const;
    this._isInitialized = true;
  }
}
