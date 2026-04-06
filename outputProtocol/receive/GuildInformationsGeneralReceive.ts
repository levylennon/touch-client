/**
 * GuildInformationsGeneralMessage — inferred from .on("GuildInformationsGeneralMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildInformationsGeneralEventName = "GuildInformationsGeneralMessage" as const;

export interface GuildInformationsGeneralPayload {
  abandonnedPaddock?: unknown;
  creationDate?: unknown;
  expLevelFloor?: unknown;
  expNextLevelFloor?: unknown;
  experience?: unknown;
  level?: unknown;
}

export class GuildInformationsGeneralReceive implements GuildInformationsGeneralPayload {
  _messageType = "GuildInformationsGeneralMessage" as const;
  abandonnedPaddock?: unknown;
  creationDate?: unknown;
  expLevelFloor?: unknown;
  expNextLevelFloor?: unknown;
  experience?: unknown;
  level?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildInformationsGeneralPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildInformationsGeneralMessage" as const;
    this._isInitialized = true;
  }
}
