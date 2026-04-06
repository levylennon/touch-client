/**
 * ObjectDeletedMessage — inferred from .on("ObjectDeletedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectDeletedEventName = "ObjectDeletedMessage" as const;

export interface ObjectDeletedPayload {
  objectUID?: unknown;
}

export class ObjectDeletedReceive implements ObjectDeletedPayload {
  _messageType = "ObjectDeletedMessage" as const;
  objectUID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectDeletedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectDeletedMessage" as const;
    this._isInitialized = true;
  }
}
