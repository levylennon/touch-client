/**
 * ObjectQuantityMessage — inferred from .on("ObjectQuantityMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectQuantityEventName = "ObjectQuantityMessage" as const;

export interface ObjectQuantityPayload {
  [key: string]: unknown;
}

export class ObjectQuantityReceive implements ObjectQuantityPayload {
  _messageType = "ObjectQuantityMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectQuantityPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectQuantityMessage" as const;
    this._isInitialized = true;
  }
}
