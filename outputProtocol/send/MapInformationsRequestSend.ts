/**
 * MapInformationsRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const MapInformationsRequestMessageType = "MapInformationsRequestMessage" as const;

export interface MapInformationsRequestPayload {
  mapId?: unknown;
}

export class MapInformationsRequestSend implements MapInformationsRequestPayload {
  _messageType = "MapInformationsRequestMessage" as const;
  mapId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MapInformationsRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MapInformationsRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MapInformationsRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MapInformationsRequestPayload;
  }
}
