/**
 * MapObstacleUpdateMessage — inferred from .on("MapObstacleUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MapObstacleUpdateEventName = "MapObstacleUpdateMessage" as const;

export interface MapObstacleUpdatePayload {
  obstacles?: unknown;
}

export class MapObstacleUpdateReceive implements MapObstacleUpdatePayload {
  _messageType = "MapObstacleUpdateMessage" as const;
  obstacles?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MapObstacleUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MapObstacleUpdateMessage" as const;
    this._isInitialized = true;
  }
}
