/**
 * ObjectDropMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ObjectDropMessageType = "ObjectDropMessage" as const;

export interface ObjectDropPayload {
  objectUID?: unknown;
  quantity?: unknown;
}

export class ObjectDropSend implements ObjectDropPayload {
  _messageType = "ObjectDropMessage" as const;
  objectUID?: unknown;
  quantity?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectDropPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectDropMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ObjectDropPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ObjectDropPayload;
  }
}
