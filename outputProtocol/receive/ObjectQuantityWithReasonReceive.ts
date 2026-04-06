/**
 * ObjectQuantityWithReasonMessage — inferred from .on("ObjectQuantityWithReasonMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectQuantityWithReasonEventName = "ObjectQuantityWithReasonMessage" as const;

export interface ObjectQuantityWithReasonPayload {
  [key: string]: unknown;
}

export class ObjectQuantityWithReasonReceive implements ObjectQuantityWithReasonPayload {
  _messageType = "ObjectQuantityWithReasonMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectQuantityWithReasonPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectQuantityWithReasonMessage" as const;
    this._isInitialized = true;
  }
}
