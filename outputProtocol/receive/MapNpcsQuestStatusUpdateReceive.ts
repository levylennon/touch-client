/**
 * MapNpcsQuestStatusUpdateMessage — inferred from .on("MapNpcsQuestStatusUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MapNpcsQuestStatusUpdateEventName = "MapNpcsQuestStatusUpdateMessage" as const;

export interface MapNpcsQuestStatusUpdatePayload {
  [key: string]: unknown;
}

export class MapNpcsQuestStatusUpdateReceive implements MapNpcsQuestStatusUpdatePayload {
  _messageType = "MapNpcsQuestStatusUpdateMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<MapNpcsQuestStatusUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MapNpcsQuestStatusUpdateMessage" as const;
    this._isInitialized = true;
  }
}
