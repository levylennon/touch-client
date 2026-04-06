/**
 * CurrentMapMessage — inferred from .on("CurrentMapMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CurrentMapEventName = "CurrentMapMessage" as const;

export interface CurrentMapPayload {
  mapId?: unknown;
}

export class CurrentMapReceive implements CurrentMapPayload {
  _messageType = "CurrentMapMessage" as const;
  mapId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<CurrentMapPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CurrentMapMessage" as const;
    this._isInitialized = true;
  }
}
