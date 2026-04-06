/**
 * ObjectModifiedMessage — inferred from .on("ObjectModifiedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectModifiedEventName = "ObjectModifiedMessage" as const;

export interface ObjectModifiedPayload {
  object?: {
    objectUID?: unknown;
  };
}

export class ObjectModifiedReceive implements ObjectModifiedPayload {
  _messageType = "ObjectModifiedMessage" as const;
  object?: {
    objectUID?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<ObjectModifiedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectModifiedMessage" as const;
    this._isInitialized = true;
  }
}
