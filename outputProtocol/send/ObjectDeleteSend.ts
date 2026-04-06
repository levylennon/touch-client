/**
 * ObjectDeleteMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ObjectDeleteMessageType = "ObjectDeleteMessage" as const;

export interface ObjectDeletePayload {
  objectUID?: unknown;
  quantity?: unknown;
}

export class ObjectDeleteSend implements ObjectDeletePayload {
  _messageType = "ObjectDeleteMessage" as const;
  objectUID?: unknown;
  quantity?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectDeletePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectDeleteMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ObjectDeletePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ObjectDeletePayload;
  }
}
