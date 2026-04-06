/**
 * MapComplementaryInformationsDataInHouseMessage — inferred from .on("MapComplementaryInformationsDataInHouseMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MapComplementaryInformationsDataInHouseEventName = "MapComplementaryInformationsDataInHouseMessage" as const;

export interface MapComplementaryInformationsDataInHousePayload {
  [key: string]: unknown;
}

export class MapComplementaryInformationsDataInHouseReceive implements MapComplementaryInformationsDataInHousePayload {
  _messageType = "MapComplementaryInformationsDataInHouseMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<MapComplementaryInformationsDataInHousePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MapComplementaryInformationsDataInHouseMessage" as const;
    this._isInitialized = true;
  }
}
