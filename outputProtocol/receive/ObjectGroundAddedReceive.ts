/**
 * ObjectGroundAddedMessage — inferred from .on("ObjectGroundAddedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectGroundAddedEventName = "ObjectGroundAddedMessage" as const;

export interface ObjectGroundAddedPayload {
  _iconId?: unknown;
  cellId?: unknown;
  objectGID?: unknown;
}

export class ObjectGroundAddedReceive implements ObjectGroundAddedPayload {
  _messageType = "ObjectGroundAddedMessage" as const;
  _iconId?: unknown;
  cellId?: unknown;
  objectGID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectGroundAddedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectGroundAddedMessage" as const;
    this._isInitialized = true;
  }
}
