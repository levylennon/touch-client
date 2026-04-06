/**
 * GuildFightJoinRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildFightJoinRequestMessageType = "GuildFightJoinRequestMessage" as const;

export interface GuildFightJoinRequestPayload {
  taxCollectorId?: unknown;
}

export class GuildFightJoinRequestSend implements GuildFightJoinRequestPayload {
  _messageType = "GuildFightJoinRequestMessage" as const;
  taxCollectorId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildFightJoinRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildFightJoinRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildFightJoinRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildFightJoinRequestPayload;
  }
}
