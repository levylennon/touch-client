/**
 * ExchangeSellMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeSellMessageType = "ExchangeSellMessage" as const;

export interface ExchangeSellPayload {
  objectToSellId?: unknown;
  quantity?: unknown;
}

export class ExchangeSellSend implements ExchangeSellPayload {
  _messageType = "ExchangeSellMessage" as const;
  objectToSellId?: unknown;
  quantity?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeSellPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeSellMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeSellPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeSellPayload;
  }
}
