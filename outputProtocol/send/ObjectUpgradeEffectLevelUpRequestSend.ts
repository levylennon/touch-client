/**
 * ObjectUpgradeEffectLevelUpRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ObjectUpgradeEffectLevelUpRequestMessageType = "ObjectUpgradeEffectLevelUpRequestMessage" as const;

export interface ObjectUpgradeEffectLevelUpRequestPayload {
  objectUID?: unknown;
}

export class ObjectUpgradeEffectLevelUpRequestSend implements ObjectUpgradeEffectLevelUpRequestPayload {
  _messageType = "ObjectUpgradeEffectLevelUpRequestMessage" as const;
  objectUID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectUpgradeEffectLevelUpRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectUpgradeEffectLevelUpRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ObjectUpgradeEffectLevelUpRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ObjectUpgradeEffectLevelUpRequestPayload;
  }
}
