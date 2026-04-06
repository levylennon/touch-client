/**
 * GuildMembershipMessage — inferred from .on("GuildMembershipMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildMembershipEventName = "GuildMembershipMessage" as const;

export interface GuildMembershipPayload {
  enabled?: unknown;
  guildInfo?: {
    guildId?: unknown;
  };
  memberRights?: unknown;
}

export class GuildMembershipReceive implements GuildMembershipPayload {
  _messageType = "GuildMembershipMessage" as const;
  enabled?: unknown;
  guildInfo?: {
    guildId?: unknown;
  };
  memberRights?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildMembershipPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildMembershipMessage" as const;
    this._isInitialized = true;
  }
}
