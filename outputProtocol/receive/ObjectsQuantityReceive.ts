/**
 * ObjectsQuantityMessage — inferred from .on("ObjectsQuantityMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectsQuantityEventName = "ObjectsQuantityMessage" as const;

export interface ObjectsQuantityPayload {
  objectsUIDAndQty?: {
    length?: unknown;
  };
}

export class ObjectsQuantityReceive implements ObjectsQuantityPayload {
  _messageType = "ObjectsQuantityMessage" as const;
  objectsUIDAndQty?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<ObjectsQuantityPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectsQuantityMessage" as const;
    this._isInitialized = true;
  }
}
