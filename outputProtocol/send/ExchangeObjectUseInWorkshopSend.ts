/**
 * ExchangeObjectUseInWorkshopMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeObjectUseInWorkshopMessageType = "ExchangeObjectUseInWorkshopMessage" as const;

export interface ExchangeObjectUseInWorkshopPayload {
  objectUID?: unknown;
  quantity?: unknown;
}

export class ExchangeObjectUseInWorkshopSend implements ExchangeObjectUseInWorkshopPayload {
  _messageType = "ExchangeObjectUseInWorkshopMessage" as const;
  objectUID?: unknown;
  quantity?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeObjectUseInWorkshopPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeObjectUseInWorkshopMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeObjectUseInWorkshopPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeObjectUseInWorkshopPayload;
  }
}
