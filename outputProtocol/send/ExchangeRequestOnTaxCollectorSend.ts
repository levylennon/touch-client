/**
 * ExchangeRequestOnTaxCollectorMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeRequestOnTaxCollectorMessageType = "ExchangeRequestOnTaxCollectorMessage" as const;

export interface ExchangeRequestOnTaxCollectorPayload {
  taxCollectorId?: unknown;
}

export class ExchangeRequestOnTaxCollectorSend implements ExchangeRequestOnTaxCollectorPayload {
  _messageType = "ExchangeRequestOnTaxCollectorMessage" as const;
  taxCollectorId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeRequestOnTaxCollectorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeRequestOnTaxCollectorMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeRequestOnTaxCollectorPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeRequestOnTaxCollectorPayload;
  }
}
