/**
 * PaddockSellBuyDialogMessage — inferred from .on("PaddockSellBuyDialogMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PaddockSellBuyDialogEventName = "PaddockSellBuyDialogMessage" as const;

export interface PaddockSellBuyDialogPayload {
  bsell?: unknown;
  price?: unknown;
}

export class PaddockSellBuyDialogReceive implements PaddockSellBuyDialogPayload {
  _messageType = "PaddockSellBuyDialogMessage" as const;
  bsell?: unknown;
  price?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PaddockSellBuyDialogPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PaddockSellBuyDialogMessage" as const;
    this._isInitialized = true;
  }
}
