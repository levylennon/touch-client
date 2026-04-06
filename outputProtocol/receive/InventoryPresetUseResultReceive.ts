/**
 * InventoryPresetUseResultMessage — inferred from .on("InventoryPresetUseResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InventoryPresetUseResultEventName = "InventoryPresetUseResultMessage" as const;

export interface InventoryPresetUseResultPayload {
  code?: unknown;
  presetId?: unknown;
}

export class InventoryPresetUseResultReceive implements InventoryPresetUseResultPayload {
  _messageType = "InventoryPresetUseResultMessage" as const;
  code?: unknown;
  presetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<InventoryPresetUseResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InventoryPresetUseResultMessage" as const;
    this._isInitialized = true;
  }
}
