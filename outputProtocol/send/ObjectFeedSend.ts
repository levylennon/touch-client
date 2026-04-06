/**
 * ObjectFeedMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ObjectFeedMessageType = "ObjectFeedMessage" as const;

export interface ObjectFeedPayload {
  foodQuantity?: number | unknown;
  foodUID?: unknown;
  objectUID?: unknown;
}

export class ObjectFeedSend implements ObjectFeedPayload {
  _messageType = "ObjectFeedMessage" as const;
  foodQuantity?: number | unknown;
  foodUID?: unknown;
  objectUID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectFeedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectFeedMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ObjectFeedPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ObjectFeedPayload;
  }
}
