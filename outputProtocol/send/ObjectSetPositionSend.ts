/**
 * ObjectSetPositionMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ObjectSetPositionMessageType = "ObjectSetPositionMessage" as const;

export interface ObjectSetPositionPayload {
  objectUID?: unknown;
  position?: unknown;
  quantity?: number;
}

export class ObjectSetPositionSend implements ObjectSetPositionPayload {
  _messageType = "ObjectSetPositionMessage" as const;
  objectUID?: unknown;
  position?: unknown;
  quantity?: number;
  _isInitialized = false;

  constructor(data: Partial<ObjectSetPositionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectSetPositionMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ObjectSetPositionPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ObjectSetPositionPayload;
  }
}
