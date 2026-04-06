/**
 * GuildFightLeaveRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildFightLeaveRequestMessageType = "GuildFightLeaveRequestMessage" as const;

export interface GuildFightLeaveRequestPayload {
  characterId?: unknown;
  taxCollectorId?: unknown;
}

export class GuildFightLeaveRequestSend implements GuildFightLeaveRequestPayload {
  _messageType = "GuildFightLeaveRequestMessage" as const;
  characterId?: unknown;
  taxCollectorId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildFightLeaveRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildFightLeaveRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildFightLeaveRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildFightLeaveRequestPayload;
  }
}
