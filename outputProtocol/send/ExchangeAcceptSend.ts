/**
 * ExchangeAcceptMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const ExchangeAcceptMessageType = "ExchangeAcceptMessage" as const;

export interface ExchangeAcceptPayload {
}

export class ExchangeAcceptSend implements ExchangeAcceptPayload {
  _messageType = "ExchangeAcceptMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<ExchangeAcceptPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeAcceptMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeAcceptPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeAcceptPayload;
  }
}
