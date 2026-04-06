/**
 * GuildMemberWarnOnConnectionStateMessage — inferred from .on("GuildMemberWarnOnConnectionStateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildMemberWarnOnConnectionStateEventName = "GuildMemberWarnOnConnectionStateMessage" as const;

export interface GuildMemberWarnOnConnectionStatePayload {
  enable?: unknown;
}

export class GuildMemberWarnOnConnectionStateReceive implements GuildMemberWarnOnConnectionStatePayload {
  _messageType = "GuildMemberWarnOnConnectionStateMessage" as const;
  enable?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildMemberWarnOnConnectionStatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildMemberWarnOnConnectionStateMessage" as const;
    this._isInitialized = true;
  }
}
