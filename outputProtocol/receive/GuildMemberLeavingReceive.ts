/**
 * GuildMemberLeavingMessage — inferred from .on("GuildMemberLeavingMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildMemberLeavingEventName = "GuildMemberLeavingMessage" as const;

export interface GuildMemberLeavingPayload {
  memberId?: unknown;
}

export class GuildMemberLeavingReceive implements GuildMemberLeavingPayload {
  _messageType = "GuildMemberLeavingMessage" as const;
  memberId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildMemberLeavingPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildMemberLeavingMessage" as const;
    this._isInitialized = true;
  }
}
