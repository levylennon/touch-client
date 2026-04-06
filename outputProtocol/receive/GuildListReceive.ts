/**
 * GuildListMessage — inferred from .on("GuildListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildListEventName = "GuildListMessage" as const;

export interface GuildListPayload {
  guilds?: unknown;
  truncated?: unknown;
}

export class GuildListReceive implements GuildListPayload {
  _messageType = "GuildListMessage" as const;
  guilds?: unknown;
  truncated?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildListMessage" as const;
    this._isInitialized = true;
  }
}
