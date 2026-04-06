/**
 * HouseKickRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const HouseKickRequestMessageType = "HouseKickRequestMessage" as const;

export interface HouseKickRequestPayload {
  id?: unknown;
}

export class HouseKickRequestSend implements HouseKickRequestPayload {
  _messageType = "HouseKickRequestMessage" as const;
  id?: unknown;
  _isInitialized = false;

  constructor(data: Partial<HouseKickRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HouseKickRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): HouseKickRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as HouseKickRequestPayload;
  }
}
