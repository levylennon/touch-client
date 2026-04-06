/**
 * GuildInvitedMessage — inferred from .on("GuildInvitedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildInvitedEventName = "GuildInvitedMessage" as const;

export interface GuildInvitedPayload {
  guildInfo?: {
    guildName?: unknown;
  };
  recruterName?: unknown;
}

export class GuildInvitedReceive implements GuildInvitedPayload {
  _messageType = "GuildInvitedMessage" as const;
  guildInfo?: {
    guildName?: unknown;
  };
  recruterName?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildInvitedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildInvitedMessage" as const;
    this._isInitialized = true;
  }
}
