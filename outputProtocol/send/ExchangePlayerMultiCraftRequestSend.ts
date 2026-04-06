/**
 * ExchangePlayerMultiCraftRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangePlayerMultiCraftRequestMessageType = "ExchangePlayerMultiCraftRequestMessage" as const;

export interface ExchangePlayerMultiCraftRequestPayload {
  exchangeType?: unknown;
  skillId?: unknown;
  target?: unknown;
}

export class ExchangePlayerMultiCraftRequestSend implements ExchangePlayerMultiCraftRequestPayload {
  _messageType = "ExchangePlayerMultiCraftRequestMessage" as const;
  exchangeType?: unknown;
  skillId?: unknown;
  target?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangePlayerMultiCraftRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangePlayerMultiCraftRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangePlayerMultiCraftRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangePlayerMultiCraftRequestPayload;
  }
}
