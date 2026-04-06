/**
 * MapRunningFightDetailsRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const MapRunningFightDetailsRequestMessageType = "MapRunningFightDetailsRequestMessage" as const;

export interface MapRunningFightDetailsRequestPayload {
  fightId?: unknown;
}

export class MapRunningFightDetailsRequestSend implements MapRunningFightDetailsRequestPayload {
  _messageType = "MapRunningFightDetailsRequestMessage" as const;
  fightId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MapRunningFightDetailsRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MapRunningFightDetailsRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MapRunningFightDetailsRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MapRunningFightDetailsRequestPayload;
  }
}
