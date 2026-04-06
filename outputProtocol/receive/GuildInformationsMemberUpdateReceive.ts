/**
 * GuildInformationsMemberUpdateMessage — inferred from .on("GuildInformationsMemberUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildInformationsMemberUpdateEventName = "GuildInformationsMemberUpdateMessage" as const;

export interface GuildInformationsMemberUpdatePayload {
  member?: unknown;
}

export class GuildInformationsMemberUpdateReceive implements GuildInformationsMemberUpdatePayload {
  _messageType = "GuildInformationsMemberUpdateMessage" as const;
  member?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildInformationsMemberUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildInformationsMemberUpdateMessage" as const;
    this._isInitialized = true;
  }
}
