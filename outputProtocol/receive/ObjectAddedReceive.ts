/**
 * ObjectAddedMessage — inferred from .on("ObjectAddedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectAddedEventName = "ObjectAddedMessage" as const;

export interface ObjectAddedPayload {
  [key: string]: unknown;
}

export class ObjectAddedReceive implements ObjectAddedPayload {
  _messageType = "ObjectAddedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectAddedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectAddedMessage" as const;
    this._isInitialized = true;
  }
}
