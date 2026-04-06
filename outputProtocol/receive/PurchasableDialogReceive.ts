/**
 * PurchasableDialogMessage — inferred from .on("PurchasableDialogMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PurchasableDialogEventName = "PurchasableDialogMessage" as const;

export interface PurchasableDialogPayload {
  [key: string]: unknown;
}

export class PurchasableDialogReceive implements PurchasableDialogPayload {
  _messageType = "PurchasableDialogMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<PurchasableDialogPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PurchasableDialogMessage" as const;
    this._isInitialized = true;
  }
}
