/**
 * GuildModificationValidMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildModificationValidMessageType = "GuildModificationValidMessage" as const;

export interface GuildModificationValidPayload {
  guildEmblem?: unknown;
  guildName?: unknown;
}

export class GuildModificationValidSend implements GuildModificationValidPayload {
  _messageType = "GuildModificationValidMessage" as const;
  guildEmblem?: unknown;
  guildName?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildModificationValidPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildModificationValidMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildModificationValidPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildModificationValidPayload;
  }
}
