/**
 * StorageObjectUpdateMessage — inferred from .on("StorageObjectUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const StorageObjectUpdateEventName = "StorageObjectUpdateMessage" as const;

export interface StorageObjectUpdatePayload {
  object?: unknown;
}

export class StorageObjectUpdateReceive implements StorageObjectUpdatePayload {
  _messageType = "StorageObjectUpdateMessage" as const;
  object?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StorageObjectUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StorageObjectUpdateMessage" as const;
    this._isInitialized = true;
  }
}
