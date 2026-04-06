/**
 * ObjectAveragePricesGetMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const ObjectAveragePricesGetMessageType = "ObjectAveragePricesGetMessage" as const;

export interface ObjectAveragePricesGetPayload {
}

export class ObjectAveragePricesGetSend implements ObjectAveragePricesGetPayload {
  _messageType = "ObjectAveragePricesGetMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<ObjectAveragePricesGetPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectAveragePricesGetMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ObjectAveragePricesGetPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ObjectAveragePricesGetPayload;
  }
}
