/**
 * StorageInventoryContentMessage — inferred from .on("StorageInventoryContentMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const StorageInventoryContentEventName = "StorageInventoryContentMessage" as const;

export interface StorageInventoryContentPayload {
  kamas?: unknown;
  objects?: unknown;
}

export class StorageInventoryContentReceive implements StorageInventoryContentPayload {
  _messageType = "StorageInventoryContentMessage" as const;
  kamas?: unknown;
  objects?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StorageInventoryContentPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StorageInventoryContentMessage" as const;
    this._isInitialized = true;
  }
}
