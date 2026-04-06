/**
 * InventoryPresetSaveResultMessage — inferred from .on("InventoryPresetSaveResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InventoryPresetSaveResultEventName = "InventoryPresetSaveResultMessage" as const;

export interface InventoryPresetSaveResultPayload {
  code?: unknown;
  presetId?: unknown;
}

export class InventoryPresetSaveResultReceive implements InventoryPresetSaveResultPayload {
  _messageType = "InventoryPresetSaveResultMessage" as const;
  code?: unknown;
  presetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<InventoryPresetSaveResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InventoryPresetSaveResultMessage" as const;
    this._isInitialized = true;
  }
}
