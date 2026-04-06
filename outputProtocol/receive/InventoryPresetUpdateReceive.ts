/**
 * InventoryPresetUpdateMessage — inferred from .on("InventoryPresetUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InventoryPresetUpdateEventName = "InventoryPresetUpdateMessage" as const;

export interface InventoryPresetUpdatePayload {
  preset?: {
    presetId?: unknown;
  };
}

export class InventoryPresetUpdateReceive implements InventoryPresetUpdatePayload {
  _messageType = "InventoryPresetUpdateMessage" as const;
  preset?: {
    presetId?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<InventoryPresetUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InventoryPresetUpdateMessage" as const;
    this._isInitialized = true;
  }
}
