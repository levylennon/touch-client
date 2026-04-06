/**
 * GuildModificationEmblemValidMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildModificationEmblemValidMessageType = "GuildModificationEmblemValidMessage" as const;

export interface GuildModificationEmblemValidPayload {
  guildEmblem?: unknown;
}

export class GuildModificationEmblemValidSend implements GuildModificationEmblemValidPayload {
  _messageType = "GuildModificationEmblemValidMessage" as const;
  guildEmblem?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildModificationEmblemValidPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildModificationEmblemValidMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildModificationEmblemValidPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildModificationEmblemValidPayload;
  }
}
