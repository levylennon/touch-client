/**
 * ObjectsAddedMessage — inferred from .on("ObjectsAddedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectsAddedEventName = "ObjectsAddedMessage" as const;

export interface ObjectsAddedPayload {
  object?: unknown;
}

export class ObjectsAddedReceive implements ObjectsAddedPayload {
  _messageType = "ObjectsAddedMessage" as const;
  object?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectsAddedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectsAddedMessage" as const;
    this._isInitialized = true;
  }
}
