/**
 * GuildFactsRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildFactsRequestMessageType = "GuildFactsRequestMessage" as const;

export interface GuildFactsRequestPayload {
  guildId?: unknown;
}

export class GuildFactsRequestSend implements GuildFactsRequestPayload {
  _messageType = "GuildFactsRequestMessage" as const;
  guildId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildFactsRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildFactsRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildFactsRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildFactsRequestPayload;
  }
}
