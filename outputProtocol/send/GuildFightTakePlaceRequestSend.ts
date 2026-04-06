/**
 * GuildFightTakePlaceRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildFightTakePlaceRequestMessageType = "GuildFightTakePlaceRequestMessage" as const;

export interface GuildFightTakePlaceRequestPayload {
  replacedCharacterId?: unknown;
  taxCollectorId?: unknown;
}

export class GuildFightTakePlaceRequestSend implements GuildFightTakePlaceRequestPayload {
  _messageType = "GuildFightTakePlaceRequestMessage" as const;
  replacedCharacterId?: unknown;
  taxCollectorId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildFightTakePlaceRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildFightTakePlaceRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildFightTakePlaceRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildFightTakePlaceRequestPayload;
  }
}
