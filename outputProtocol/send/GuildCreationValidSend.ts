/**
 * GuildCreationValidMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildCreationValidMessageType = "GuildCreationValidMessage" as const;

export interface GuildCreationValidPayload {
  guildEmblem?: unknown;
  guildName?: unknown;
}

export class GuildCreationValidSend implements GuildCreationValidPayload {
  _messageType = "GuildCreationValidMessage" as const;
  guildEmblem?: unknown;
  guildName?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildCreationValidPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildCreationValidMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildCreationValidPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildCreationValidPayload;
  }
}
