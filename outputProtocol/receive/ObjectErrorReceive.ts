/**
 * ObjectErrorMessage — inferred from .on("ObjectErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectErrorEventName = "ObjectErrorMessage" as const;

export interface ObjectErrorPayload {
  reason?: unknown;
}

export class ObjectErrorReceive implements ObjectErrorPayload {
  _messageType = "ObjectErrorMessage" as const;
  reason?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectErrorMessage" as const;
    this._isInitialized = true;
  }
}
