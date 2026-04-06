/**
 * StorageObjectsUpdateMessage — inferred from .on("StorageObjectsUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const StorageObjectsUpdateEventName = "StorageObjectsUpdateMessage" as const;

export interface StorageObjectsUpdatePayload {
  objectList?: unknown;
}

export class StorageObjectsUpdateReceive implements StorageObjectsUpdatePayload {
  _messageType = "StorageObjectsUpdateMessage" as const;
  objectList?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StorageObjectsUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StorageObjectsUpdateMessage" as const;
    this._isInitialized = true;
  }
}
