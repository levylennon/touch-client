/**
 * ObjectUpgradeEffectShatterRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ObjectUpgradeEffectShatterRequestMessageType = "ObjectUpgradeEffectShatterRequestMessage" as const;

export interface ObjectUpgradeEffectShatterRequestPayload {
  objectUID?: unknown;
}

export class ObjectUpgradeEffectShatterRequestSend implements ObjectUpgradeEffectShatterRequestPayload {
  _messageType = "ObjectUpgradeEffectShatterRequestMessage" as const;
  objectUID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectUpgradeEffectShatterRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectUpgradeEffectShatterRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ObjectUpgradeEffectShatterRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ObjectUpgradeEffectShatterRequestPayload;
  }
}
