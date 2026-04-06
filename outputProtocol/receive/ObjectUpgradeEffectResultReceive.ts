/**
 * ObjectUpgradeEffectResultMessage — inferred from .on("ObjectUpgradeEffectResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectUpgradeEffectResultEventName = "ObjectUpgradeEffectResultMessage" as const;

export interface ObjectUpgradeEffectResultPayload {
  status?: unknown;
}

export class ObjectUpgradeEffectResultReceive implements ObjectUpgradeEffectResultPayload {
  _messageType = "ObjectUpgradeEffectResultMessage" as const;
  status?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ObjectUpgradeEffectResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectUpgradeEffectResultMessage" as const;
    this._isInitialized = true;
  }
}
