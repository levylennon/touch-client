/**
 * ObjectGroundRemovedMessage — inferred from .on("ObjectGroundRemovedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectGroundRemovedEventName = "ObjectGroundRemovedMessage" as const;

export interface ObjectGroundRemovedPayload {
  cell?: unknown;
}

export class ObjectGroundRemovedReceive implements ObjectGroundRemovedPayload {
  _messageType = "ObjectGroundRemovedMessage" as const;
  cell?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectGroundRemovedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectGroundRemovedMessage" as const;
    this._isInitialized = true;
  }
}
