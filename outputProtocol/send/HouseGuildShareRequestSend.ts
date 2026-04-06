/**
 * HouseGuildShareRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const HouseGuildShareRequestMessageType = "HouseGuildShareRequestMessage" as const;

export interface HouseGuildShareRequestPayload {
  enable?: unknown;
  rights?: unknown;
}

export class HouseGuildShareRequestSend implements HouseGuildShareRequestPayload {
  _messageType = "HouseGuildShareRequestMessage" as const;
  enable?: unknown;
  rights?: unknown;
  _isInitialized = false;

  constructor(data: Partial<HouseGuildShareRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HouseGuildShareRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): HouseGuildShareRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as HouseGuildShareRequestPayload;
  }
}
