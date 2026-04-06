/**
 * SubscriptionStatusMessage — inferred from .on("SubscriptionStatusMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SubscriptionStatusEventName = "SubscriptionStatusMessage" as const;

export interface SubscriptionStatusPayload {
  levels?: {
    length?: unknown;
  };
}

export class SubscriptionStatusReceive implements SubscriptionStatusPayload {
  _messageType = "SubscriptionStatusMessage" as const;
  levels?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<SubscriptionStatusPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SubscriptionStatusMessage" as const;
    this._isInitialized = true;
  }
}
