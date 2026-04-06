/**
 * GuildInAllianceFactsMessage — inferred from .on("GuildInAllianceFactsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildInAllianceFactsEventName = "GuildInAllianceFactsMessage" as const;

export interface GuildInAllianceFactsPayload {
  [key: string]: unknown;
}

export class GuildInAllianceFactsReceive implements GuildInAllianceFactsPayload {
  _messageType = "GuildInAllianceFactsMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildInAllianceFactsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildInAllianceFactsMessage" as const;
    this._isInitialized = true;
  }
}
