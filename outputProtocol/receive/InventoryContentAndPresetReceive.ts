/**
 * InventoryContentAndPresetMessage — inferred from .on("InventoryContentAndPresetMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InventoryContentAndPresetEventName = "InventoryContentAndPresetMessage" as const;

export interface InventoryContentAndPresetPayload {
  [key: string]: unknown;
}

export class InventoryContentAndPresetReceive implements InventoryContentAndPresetPayload {
  _messageType = "InventoryContentAndPresetMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<InventoryContentAndPresetPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InventoryContentAndPresetMessage" as const;
    this._isInitialized = true;
  }
}
