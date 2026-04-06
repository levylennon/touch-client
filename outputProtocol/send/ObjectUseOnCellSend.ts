/**
 * ObjectUseOnCellMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ObjectUseOnCellMessageType = "ObjectUseOnCellMessage" as const;

export interface ObjectUseOnCellPayload {
  cells?: unknown;
  objectUID?: unknown;
}

export class ObjectUseOnCellSend implements ObjectUseOnCellPayload {
  _messageType = "ObjectUseOnCellMessage" as const;
  cells?: unknown;
  objectUID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectUseOnCellPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectUseOnCellMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ObjectUseOnCellPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ObjectUseOnCellPayload;
  }
}
