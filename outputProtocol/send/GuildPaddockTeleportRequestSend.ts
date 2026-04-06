/**
 * GuildPaddockTeleportRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildPaddockTeleportRequestMessageType = "GuildPaddockTeleportRequestMessage" as const;

export interface GuildPaddockTeleportRequestPayload {
  paddockId?: unknown;
}

export class GuildPaddockTeleportRequestSend implements GuildPaddockTeleportRequestPayload {
  _messageType = "GuildPaddockTeleportRequestMessage" as const;
  paddockId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildPaddockTeleportRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildPaddockTeleportRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildPaddockTeleportRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildPaddockTeleportRequestPayload;
  }
}
