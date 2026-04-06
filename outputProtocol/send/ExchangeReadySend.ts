/**
 * ExchangeReadyMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeReadyMessageType = "ExchangeReadyMessage" as const;

export interface ExchangeReadyPayload {
  ready?: unknown;
  step?: number | unknown;
}

export class ExchangeReadySend implements ExchangeReadyPayload {
  _messageType = "ExchangeReadyMessage" as const;
  ready?: unknown;
  step?: number | unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeReadyPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeReadyMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeReadyPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeReadyPayload;
  }
}
