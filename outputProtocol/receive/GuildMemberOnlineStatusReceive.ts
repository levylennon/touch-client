/**
 * GuildMemberOnlineStatusMessage — inferred from .on("GuildMemberOnlineStatusMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildMemberOnlineStatusEventName = "GuildMemberOnlineStatusMessage" as const;

export interface GuildMemberOnlineStatusPayload {
  memberId?: unknown;
  online?: unknown;
}

export class GuildMemberOnlineStatusReceive implements GuildMemberOnlineStatusPayload {
  _messageType = "GuildMemberOnlineStatusMessage" as const;
  memberId?: unknown;
  online?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildMemberOnlineStatusPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildMemberOnlineStatusMessage" as const;
    this._isInitialized = true;
  }
}
