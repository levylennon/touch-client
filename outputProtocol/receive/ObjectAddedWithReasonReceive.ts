/**
 * ObjectAddedWithReasonMessage — inferred from .on("ObjectAddedWithReasonMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectAddedWithReasonEventName = "ObjectAddedWithReasonMessage" as const;

export interface ObjectAddedWithReasonPayload {
  [key: string]: unknown;
}

export class ObjectAddedWithReasonReceive implements ObjectAddedWithReasonPayload {
  _messageType = "ObjectAddedWithReasonMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectAddedWithReasonPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectAddedWithReasonMessage" as const;
    this._isInitialized = true;
  }
}
