/**
 * ExchangeObjectMovePricedMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeObjectMovePricedMessageType = "ExchangeObjectMovePricedMessage" as const;

export interface ExchangeObjectMovePricedPayload {
  objectUID?: unknown;
  price?: unknown;
  quantity?: unknown;
}

export class ExchangeObjectMovePricedSend implements ExchangeObjectMovePricedPayload {
  _messageType = "ExchangeObjectMovePricedMessage" as const;
  objectUID?: unknown;
  price?: unknown;
  quantity?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeObjectMovePricedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeObjectMovePricedMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeObjectMovePricedPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeObjectMovePricedPayload;
  }
}
