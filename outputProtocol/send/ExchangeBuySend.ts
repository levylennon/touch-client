/**
 * ExchangeBuyMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeBuyMessageType = "ExchangeBuyMessage" as const;

export interface ExchangeBuyPayload {
  objectToBuyId?: unknown;
  quantity?: unknown;
}

export class ExchangeBuySend implements ExchangeBuyPayload {
  _messageType = "ExchangeBuyMessage" as const;
  objectToBuyId?: unknown;
  quantity?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBuyPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBuyMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeBuyPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeBuyPayload;
  }
}
