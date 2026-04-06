/**
 * GuildPaddockBoughtMessage — inferred from .on("GuildPaddockBoughtMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildPaddockBoughtEventName = "GuildPaddockBoughtMessage" as const;

export interface GuildPaddockBoughtPayload {
  paddockInfo?: unknown;
}

export class GuildPaddockBoughtReceive implements GuildPaddockBoughtPayload {
  _messageType = "GuildPaddockBoughtMessage" as const;
  paddockInfo?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildPaddockBoughtPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildPaddockBoughtMessage" as const;
    this._isInitialized = true;
  }
}
