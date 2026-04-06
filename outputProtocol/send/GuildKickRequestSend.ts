/**
 * GuildKickRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildKickRequestMessageType = "GuildKickRequestMessage" as const;

export interface GuildKickRequestPayload {
  kickedId?: unknown;
}

export class GuildKickRequestSend implements GuildKickRequestPayload {
  _messageType = "GuildKickRequestMessage" as const;
  kickedId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildKickRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildKickRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildKickRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildKickRequestPayload;
  }
}
