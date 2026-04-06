/**
 * ExchangePlayerRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangePlayerRequestMessageType = "ExchangePlayerRequestMessage" as const;

export interface ExchangePlayerRequestPayload {
  exchangeType?: number;
  target?: unknown;
}

export class ExchangePlayerRequestSend implements ExchangePlayerRequestPayload {
  _messageType = "ExchangePlayerRequestMessage" as const;
  exchangeType?: number;
  target?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangePlayerRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangePlayerRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangePlayerRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangePlayerRequestPayload;
  }
}
