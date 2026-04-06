/**
 * MapFightCountMessage — inferred from .on("MapFightCountMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MapFightCountEventName = "MapFightCountMessage" as const;

export interface MapFightCountPayload {
  fightCount?: unknown;
}

export class MapFightCountReceive implements MapFightCountPayload {
  _messageType = "MapFightCountMessage" as const;
  fightCount?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MapFightCountPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MapFightCountMessage" as const;
    this._isInitialized = true;
  }
}
