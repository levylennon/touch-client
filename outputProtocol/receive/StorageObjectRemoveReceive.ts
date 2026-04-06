/**
 * StorageObjectRemoveMessage — inferred from .on("StorageObjectRemoveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const StorageObjectRemoveEventName = "StorageObjectRemoveMessage" as const;

export interface StorageObjectRemovePayload {
  objectUID?: unknown;
}

export class StorageObjectRemoveReceive implements StorageObjectRemovePayload {
  _messageType = "StorageObjectRemoveMessage" as const;
  objectUID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StorageObjectRemovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StorageObjectRemoveMessage" as const;
    this._isInitialized = true;
  }
}
