/**
 * GuildMemberSetWarnOnConnectionMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildMemberSetWarnOnConnectionMessageType = "GuildMemberSetWarnOnConnectionMessage" as const;

export interface GuildMemberSetWarnOnConnectionPayload {
  enable?: unknown;
}

export class GuildMemberSetWarnOnConnectionSend implements GuildMemberSetWarnOnConnectionPayload {
  _messageType = "GuildMemberSetWarnOnConnectionMessage" as const;
  enable?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildMemberSetWarnOnConnectionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildMemberSetWarnOnConnectionMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildMemberSetWarnOnConnectionPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildMemberSetWarnOnConnectionPayload;
  }
}
