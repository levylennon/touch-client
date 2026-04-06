/**
 * ExchangeHandleMountStableMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeHandleMountStableMessageType = "ExchangeHandleMountStableMessage" as const;

export interface ExchangeHandleMountStablePayload {
  actionType?: unknown;
  rideId?: unknown;
}

export class ExchangeHandleMountStableSend implements ExchangeHandleMountStablePayload {
  _messageType = "ExchangeHandleMountStableMessage" as const;
  actionType?: unknown;
  rideId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeHandleMountStablePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeHandleMountStableMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeHandleMountStablePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeHandleMountStablePayload;
  }
}
