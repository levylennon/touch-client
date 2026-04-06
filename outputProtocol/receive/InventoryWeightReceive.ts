/**
 * InventoryWeightMessage — inferred from .on("InventoryWeightMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InventoryWeightEventName = "InventoryWeightMessage" as const;

export interface InventoryWeightPayload {
  weight?: unknown;
  weightMax?: unknown;
}

export class InventoryWeightReceive implements InventoryWeightPayload {
  _messageType = "InventoryWeightMessage" as const;
  weight?: unknown;
  weightMax?: unknown;
  _isInitialized = false;

  constructor(data: Partial<InventoryWeightPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InventoryWeightMessage" as const;
    this._isInitialized = true;
  }
}
