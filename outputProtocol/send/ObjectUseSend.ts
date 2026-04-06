/**
 * ObjectUseMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ObjectUseMessageType = "ObjectUseMessage" as const;

export interface ObjectUsePayload {
  objectUID?: unknown;
}

export class ObjectUseSend implements ObjectUsePayload {
  _messageType = "ObjectUseMessage" as const;
  objectUID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectUsePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectUseMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ObjectUsePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ObjectUsePayload;
  }
}
