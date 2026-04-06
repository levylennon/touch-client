/**
 * GuildModificationNameValidMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildModificationNameValidMessageType = "GuildModificationNameValidMessage" as const;

export interface GuildModificationNameValidPayload {
  guildName?: unknown;
}

export class GuildModificationNameValidSend implements GuildModificationNameValidPayload {
  _messageType = "GuildModificationNameValidMessage" as const;
  guildName?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildModificationNameValidPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildModificationNameValidMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildModificationNameValidPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildModificationNameValidPayload;
  }
}
