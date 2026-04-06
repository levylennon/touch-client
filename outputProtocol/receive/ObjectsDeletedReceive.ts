/**
 * ObjectsDeletedMessage — inferred from .on("ObjectsDeletedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectsDeletedEventName = "ObjectsDeletedMessage" as const;

export interface ObjectsDeletedPayload {
  objectUID?: {
    length?: unknown;
  };
}

export class ObjectsDeletedReceive implements ObjectsDeletedPayload {
  _messageType = "ObjectsDeletedMessage" as const;
  objectUID?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<ObjectsDeletedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectsDeletedMessage" as const;
    this._isInitialized = true;
  }
}
