/**
 * MapComplementaryInformationsWithCoordsMessage — inferred from .on("MapComplementaryInformationsWithCoordsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MapComplementaryInformationsWithCoordsEventName = "MapComplementaryInformationsWithCoordsMessage" as const;

export interface MapComplementaryInformationsWithCoordsPayload {
  [key: string]: unknown;
}

export class MapComplementaryInformationsWithCoordsReceive implements MapComplementaryInformationsWithCoordsPayload {
  _messageType = "MapComplementaryInformationsWithCoordsMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<MapComplementaryInformationsWithCoordsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MapComplementaryInformationsWithCoordsMessage" as const;
    this._isInitialized = true;
  }
}
