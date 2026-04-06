/**
 * ObjectUpgradeEffectConversionRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ObjectUpgradeEffectConversionRequestMessageType = "ObjectUpgradeEffectConversionRequestMessage" as const;

export interface ObjectUpgradeEffectConversionRequestPayload {
  sourceObjectUID?: unknown;
  targetObjectGID?: unknown;
}

export class ObjectUpgradeEffectConversionRequestSend implements ObjectUpgradeEffectConversionRequestPayload {
  _messageType = "ObjectUpgradeEffectConversionRequestMessage" as const;
  sourceObjectUID?: unknown;
  targetObjectGID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectUpgradeEffectConversionRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectUpgradeEffectConversionRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ObjectUpgradeEffectConversionRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ObjectUpgradeEffectConversionRequestPayload;
  }
}
