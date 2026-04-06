/**
 * MapRunningFightDetailsMessage — inferred from .on("MapRunningFightDetailsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MapRunningFightDetailsEventName = "MapRunningFightDetailsMessage" as const;

export interface MapRunningFightDetailsPayload {
  [key: string]: unknown;
}

export class MapRunningFightDetailsReceive implements MapRunningFightDetailsPayload {
  _messageType = "MapRunningFightDetailsMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<MapRunningFightDetailsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MapRunningFightDetailsMessage" as const;
    this._isInitialized = true;
  }
}
