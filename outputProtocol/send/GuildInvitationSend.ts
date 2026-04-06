/**
 * GuildInvitationMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildInvitationMessageType = "GuildInvitationMessage" as const;

export interface GuildInvitationPayload {
  targetId?: unknown;
}

export class GuildInvitationSend implements GuildInvitationPayload {
  _messageType = "GuildInvitationMessage" as const;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildInvitationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildInvitationMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildInvitationPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildInvitationPayload;
  }
}
