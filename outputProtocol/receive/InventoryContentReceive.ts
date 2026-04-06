/**
 * InventoryContentMessage — inferred from .on("InventoryContentMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InventoryContentEventName = "InventoryContentMessage" as const;

export interface InventoryContentPayload {
  [key: string]: unknown;
}

export class InventoryContentReceive implements InventoryContentPayload {
  _messageType = "InventoryContentMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<InventoryContentPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InventoryContentMessage" as const;
    this._isInitialized = true;
  }
}
