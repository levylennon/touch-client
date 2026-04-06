/**
 * GuildHouseTeleportRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildHouseTeleportRequestMessageType = "GuildHouseTeleportRequestMessage" as const;

export interface GuildHouseTeleportRequestPayload {
  houseId?: unknown;
}

export class GuildHouseTeleportRequestSend implements GuildHouseTeleportRequestPayload {
  _messageType = "GuildHouseTeleportRequestMessage" as const;
  houseId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildHouseTeleportRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildHouseTeleportRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildHouseTeleportRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildHouseTeleportRequestPayload;
  }
}
