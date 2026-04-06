/**
 * InventoryPresetItemUpdateErrorMessage — inferred from .on("InventoryPresetItemUpdateErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InventoryPresetItemUpdateErrorEventName = "InventoryPresetItemUpdateErrorMessage" as const;

export interface InventoryPresetItemUpdateErrorPayload {
  code?: unknown;
}

export class InventoryPresetItemUpdateErrorReceive implements InventoryPresetItemUpdateErrorPayload {
  _messageType = "InventoryPresetItemUpdateErrorMessage" as const;
  code?: unknown;
  _isInitialized = false;

  constructor(data: Partial<InventoryPresetItemUpdateErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InventoryPresetItemUpdateErrorMessage" as const;
    this._isInitialized = true;
  }
}
