/**
 * StorageObjectsRemoveMessage — inferred from .on("StorageObjectsRemoveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const StorageObjectsRemoveEventName = "StorageObjectsRemoveMessage" as const;

export interface StorageObjectsRemovePayload {
  objectUIDList?: unknown;
}

export class StorageObjectsRemoveReceive implements StorageObjectsRemovePayload {
  _messageType = "StorageObjectsRemoveMessage" as const;
  objectUIDList?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StorageObjectsRemovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StorageObjectsRemoveMessage" as const;
    this._isInitialized = true;
  }
}
