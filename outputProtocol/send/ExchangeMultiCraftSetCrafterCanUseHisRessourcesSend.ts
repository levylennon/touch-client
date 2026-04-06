/**
 * ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessageType = "ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage" as const;

export interface ExchangeMultiCraftSetCrafterCanUseHisRessourcesPayload {
  allow?: unknown;
}

export class ExchangeMultiCraftSetCrafterCanUseHisRessourcesSend implements ExchangeMultiCraftSetCrafterCanUseHisRessourcesPayload {
  _messageType = "ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage" as const;
  allow?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeMultiCraftSetCrafterCanUseHisRessourcesPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeMultiCraftSetCrafterCanUseHisRessourcesPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeMultiCraftSetCrafterCanUseHisRessourcesPayload;
  }
}
