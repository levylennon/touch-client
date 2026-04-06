/**
 * GuildFactsMessage — inferred from .on("GuildFactsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildFactsEventName = "GuildFactsMessage" as const;

export interface GuildFactsPayload {
  [key: string]: unknown;
}

export class GuildFactsReceive implements GuildFactsPayload {
  _messageType = "GuildFactsMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildFactsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildFactsMessage" as const;
    this._isInitialized = true;
  }
}
