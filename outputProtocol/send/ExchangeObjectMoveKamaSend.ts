/**
 * ExchangeObjectMoveKamaMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeObjectMoveKamaMessageType = "ExchangeObjectMoveKamaMessage" as const;

export interface ExchangeObjectMoveKamaPayload {
  quantity?: unknown;
}

export class ExchangeObjectMoveKamaSend implements ExchangeObjectMoveKamaPayload {
  _messageType = "ExchangeObjectMoveKamaMessage" as const;
  quantity?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeObjectMoveKamaPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeObjectMoveKamaMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeObjectMoveKamaPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeObjectMoveKamaPayload;
  }
}
