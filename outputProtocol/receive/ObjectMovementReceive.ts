/**
 * ObjectMovementMessage — inferred from .on("ObjectMovementMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectMovementEventName = "ObjectMovementMessage" as const;

export interface ObjectMovementPayload {
  objectUID?: unknown;
  position?: unknown;
}

export class ObjectMovementReceive implements ObjectMovementPayload {
  _messageType = "ObjectMovementMessage" as const;
  objectUID?: unknown;
  position?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectMovementPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectMovementMessage" as const;
    this._isInitialized = true;
  }
}
