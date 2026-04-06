/**
 * GuildInformationsMembersMessage — inferred from .on("GuildInformationsMembersMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildInformationsMembersEventName = "GuildInformationsMembersMessage" as const;

export interface GuildInformationsMembersPayload {
  members?: {
    length?: unknown;
  };
}

export class GuildInformationsMembersReceive implements GuildInformationsMembersPayload {
  _messageType = "GuildInformationsMembersMessage" as const;
  members?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<GuildInformationsMembersPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildInformationsMembersMessage" as const;
    this._isInitialized = true;
  }
}
