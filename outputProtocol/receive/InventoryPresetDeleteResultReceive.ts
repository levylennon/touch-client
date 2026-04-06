/**
 * InventoryPresetDeleteResultMessage — inferred from .on("InventoryPresetDeleteResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InventoryPresetDeleteResultEventName = "InventoryPresetDeleteResultMessage" as const;

export interface InventoryPresetDeleteResultPayload {
  code?: unknown;
  presetId?: unknown;
}

export class InventoryPresetDeleteResultReceive implements InventoryPresetDeleteResultPayload {
  _messageType = "InventoryPresetDeleteResultMessage" as const;
  code?: unknown;
  presetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<InventoryPresetDeleteResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InventoryPresetDeleteResultMessage" as const;
    this._isInitialized = true;
  }
}
