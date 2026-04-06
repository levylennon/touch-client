/**
 * ExchangeMultiCraftCrafterCanUseHisRessourcesMessage — inferred from .on("ExchangeMultiCraftCrafterCanUseHisRessourcesMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeMultiCraftCrafterCanUseHisRessourcesEventName = "ExchangeMultiCraftCrafterCanUseHisRessourcesMessage" as const;

export interface ExchangeMultiCraftCrafterCanUseHisRessourcesPayload {
  [key: string]: unknown;
}

export class ExchangeMultiCraftCrafterCanUseHisRessourcesReceive implements ExchangeMultiCraftCrafterCanUseHisRessourcesPayload {
  _messageType = "ExchangeMultiCraftCrafterCanUseHisRessourcesMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeMultiCraftCrafterCanUseHisRessourcesPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeMultiCraftCrafterCanUseHisRessourcesMessage" as const;
    this._isInitialized = true;
  }
}
