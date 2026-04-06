/**
 * GuildJoinedMessage — inferred from .on("GuildJoinedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildJoinedEventName = "GuildJoinedMessage" as const;

export interface GuildJoinedPayload {
  enabled?: unknown;
  guildInfo?: {
    guildId?: unknown;
    guildName?: unknown;
  };
  memberRights?: unknown;
}

export class GuildJoinedReceive implements GuildJoinedPayload {
  _messageType = "GuildJoinedMessage" as const;
  enabled?: unknown;
  guildInfo?: {
    guildId?: unknown;
    guildName?: unknown;
  };
  memberRights?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildJoinedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildJoinedMessage" as const;
    this._isInitialized = true;
  }
}
