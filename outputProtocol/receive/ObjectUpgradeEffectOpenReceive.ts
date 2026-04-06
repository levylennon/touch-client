/**
 * ObjectUpgradeEffectOpenMessage — inferred from .on("ObjectUpgradeEffectOpenMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectUpgradeEffectOpenEventName = "ObjectUpgradeEffectOpenMessage" as const;

export interface ObjectUpgradeEffectOpenPayload {
  [key: string]: unknown;
}

export class ObjectUpgradeEffectOpenReceive implements ObjectUpgradeEffectOpenPayload {
  _messageType = "ObjectUpgradeEffectOpenMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectUpgradeEffectOpenPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectUpgradeEffectOpenMessage" as const;
    this._isInitialized = true;
  }
}
