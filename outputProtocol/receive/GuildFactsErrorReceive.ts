/**
 * GuildFactsErrorMessage — inferred from .on("GuildFactsErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildFactsErrorEventName = "GuildFactsErrorMessage" as const;

export interface GuildFactsErrorPayload {
  [key: string]: unknown;
}

export class GuildFactsErrorReceive implements GuildFactsErrorPayload {
  _messageType = "GuildFactsErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildFactsErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildFactsErrorMessage" as const;
    this._isInitialized = true;
  }
}
