/**
 * ObjectUseMultipleMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ObjectUseMultipleMessageType = "ObjectUseMultipleMessage" as const;

export interface ObjectUseMultiplePayload {
  objectUID?: unknown;
  quantity?: unknown;
}

export class ObjectUseMultipleSend implements ObjectUseMultiplePayload {
  _messageType = "ObjectUseMultipleMessage" as const;
  objectUID?: unknown;
  quantity?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectUseMultiplePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectUseMultipleMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ObjectUseMultiplePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ObjectUseMultiplePayload;
  }
}
