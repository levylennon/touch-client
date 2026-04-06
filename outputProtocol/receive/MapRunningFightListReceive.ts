/**
 * MapRunningFightListMessage — inferred from .on("MapRunningFightListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MapRunningFightListEventName = "MapRunningFightListMessage" as const;

export interface MapRunningFightListPayload {
  [key: string]: unknown;
}

export class MapRunningFightListReceive implements MapRunningFightListPayload {
  _messageType = "MapRunningFightListMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<MapRunningFightListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MapRunningFightListMessage" as const;
    this._isInitialized = true;
  }
}
