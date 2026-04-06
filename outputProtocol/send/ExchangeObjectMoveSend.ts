/**
 * ExchangeObjectMoveMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeObjectMoveMessageType = "ExchangeObjectMoveMessage" as const;

export interface ExchangeObjectMovePayload {
  objectUID?: unknown;
  price?: unknown;
  quantity?: unknown | number;
}

export class ExchangeObjectMoveSend implements ExchangeObjectMovePayload {
  _messageType = "ExchangeObjectMoveMessage" as const;
  objectUID?: unknown;
  price?: unknown;
  quantity?: unknown | number;
  _isInitialized = false;

  constructor(data: Partial<ExchangeObjectMovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeObjectMoveMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeObjectMovePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeObjectMovePayload;
  }
}
