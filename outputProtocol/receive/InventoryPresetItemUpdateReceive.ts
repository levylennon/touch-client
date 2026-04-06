/**
 * InventoryPresetItemUpdateMessage — inferred from .on("InventoryPresetItemUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InventoryPresetItemUpdateEventName = "InventoryPresetItemUpdateMessage" as const;

export interface InventoryPresetItemUpdatePayload {
  [key: string]: unknown;
}

export class InventoryPresetItemUpdateReceive implements InventoryPresetItemUpdatePayload {
  _messageType = "InventoryPresetItemUpdateMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<InventoryPresetItemUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InventoryPresetItemUpdateMessage" as const;
    this._isInitialized = true;
  }
}
