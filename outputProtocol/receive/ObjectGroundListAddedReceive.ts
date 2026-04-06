/**
 * ObjectGroundListAddedMessage — inferred from .on("ObjectGroundListAddedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectGroundListAddedEventName = "ObjectGroundListAddedMessage" as const;

export interface ObjectGroundListAddedPayload {
  _iconIds?: unknown;
  cells?: {
    length?: unknown;
  };
  length?: unknown;
  referenceIds?: unknown;
}

export class ObjectGroundListAddedReceive implements ObjectGroundListAddedPayload {
  _messageType = "ObjectGroundListAddedMessage" as const;
  _iconIds?: unknown;
  cells?: {
    length?: unknown;
  };
  length?: unknown;
  referenceIds?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectGroundListAddedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectGroundListAddedMessage" as const;
    this._isInitialized = true;
  }
}
