/**
 * ExchangeRequestOnMountStockMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const ExchangeRequestOnMountStockMessageType = "ExchangeRequestOnMountStockMessage" as const;

export interface ExchangeRequestOnMountStockPayload {
}

export class ExchangeRequestOnMountStockSend implements ExchangeRequestOnMountStockPayload {
  _messageType = "ExchangeRequestOnMountStockMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<ExchangeRequestOnMountStockPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeRequestOnMountStockMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeRequestOnMountStockPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeRequestOnMountStockPayload;
  }
}
