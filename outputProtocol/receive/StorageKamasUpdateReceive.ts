/**
 * StorageKamasUpdateMessage — inferred from .on("StorageKamasUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const StorageKamasUpdateEventName = "StorageKamasUpdateMessage" as const;

export interface StorageKamasUpdatePayload {
  kamasTotal?: unknown;
}

export class StorageKamasUpdateReceive implements StorageKamasUpdatePayload {
  _messageType = "StorageKamasUpdateMessage" as const;
  kamasTotal?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StorageKamasUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StorageKamasUpdateMessage" as const;
    this._isInitialized = true;
  }
}
