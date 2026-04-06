/**
 * FeatureEnabledMessage — inferred from .on("FeatureEnabledMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const FeatureEnabledEventName = "FeatureEnabledMessage" as const;

export interface FeatureEnabledPayload {
  [key: string]: unknown;
}

export class FeatureEnabledReceive implements FeatureEnabledPayload {
  _messageType = "FeatureEnabledMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<FeatureEnabledPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FeatureEnabledMessage" as const;
    this._isInitialized = true;
  }
}
