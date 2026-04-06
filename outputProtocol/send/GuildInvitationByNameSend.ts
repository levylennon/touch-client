/**
 * GuildInvitationByNameMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const GuildInvitationByNameMessageType = "GuildInvitationByNameMessage" as const;

export interface GuildInvitationByNamePayload {
  name?: unknown;
}

export class GuildInvitationByNameSend implements GuildInvitationByNamePayload {
  _messageType = "GuildInvitationByNameMessage" as const;
  name?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildInvitationByNamePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildInvitationByNameMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): GuildInvitationByNamePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as GuildInvitationByNamePayload;
  }
}
