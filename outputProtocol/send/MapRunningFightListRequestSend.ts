/**
 * MapRunningFightListRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const MapRunningFightListRequestMessageType = "MapRunningFightListRequestMessage" as const;

export interface MapRunningFightListRequestPayload {
}

export class MapRunningFightListRequestSend implements MapRunningFightListRequestPayload {
  _messageType = "MapRunningFightListRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<MapRunningFightListRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MapRunningFightListRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): MapRunningFightListRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as MapRunningFightListRequestPayload;
  }
}
