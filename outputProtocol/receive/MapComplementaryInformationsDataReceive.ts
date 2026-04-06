/**
 * mapComplementaryInformationsData — inferred from .on("mapComplementaryInformationsData", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MapComplementaryInformationsDataEventName = "mapComplementaryInformationsData" as const;

export interface MapComplementaryInformationsDataPayload {
  actors?: {
    length?: unknown;
  };
  currentHouse?: unknown;
  fights?: unknown;
  mapId?: unknown;
  worldX?: unknown;
  worldY?: unknown;
}

export class MapComplementaryInformationsDataReceive implements MapComplementaryInformationsDataPayload {
  _messageType = "mapComplementaryInformationsData" as const;
  actors?: {
    length?: unknown;
  };
  currentHouse?: unknown;
  fights?: unknown;
  mapId?: unknown;
  worldX?: unknown;
  worldY?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MapComplementaryInformationsDataPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "mapComplementaryInformationsData" as const;
    this._isInitialized = true;
  }
}
