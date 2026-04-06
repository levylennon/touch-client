/**
 * GuildLeftMessage — inferred from .on("GuildLeftMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildLeftEventName = "GuildLeftMessage" as const;

export interface GuildLeftPayload {
  [key: string]: unknown;
}

export class GuildLeftReceive implements GuildLeftPayload {
  _messageType = "GuildLeftMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildLeftPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildLeftMessage" as const;
    this._isInitialized = true;
  }
}
