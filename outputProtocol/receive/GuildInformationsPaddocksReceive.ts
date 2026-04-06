/**
 * GuildInformationsPaddocksMessage — inferred from .on("GuildInformationsPaddocksMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildInformationsPaddocksEventName = "GuildInformationsPaddocksMessage" as const;

export interface GuildInformationsPaddocksPayload {
  paddocksInformations?: {
    forEach?: unknown;
  };
}

export class GuildInformationsPaddocksReceive implements GuildInformationsPaddocksPayload {
  _messageType = "GuildInformationsPaddocksMessage" as const;
  paddocksInformations?: {
    forEach?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<GuildInformationsPaddocksPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildInformationsPaddocksMessage" as const;
    this._isInitialized = true;
  }
}
