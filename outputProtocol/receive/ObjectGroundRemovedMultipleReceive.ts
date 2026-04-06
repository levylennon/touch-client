/**
 * ObjectGroundRemovedMultipleMessage — inferred from .on("ObjectGroundRemovedMultipleMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectGroundRemovedMultipleEventName = "ObjectGroundRemovedMultipleMessage" as const;

export interface ObjectGroundRemovedMultiplePayload {
  cells?: unknown;
}

export class ObjectGroundRemovedMultipleReceive implements ObjectGroundRemovedMultiplePayload {
  _messageType = "ObjectGroundRemovedMultipleMessage" as const;
  cells?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectGroundRemovedMultiplePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectGroundRemovedMultipleMessage" as const;
    this._isInitialized = true;
  }
}
