/**
 * GuildCreationStartedMessage — inferred from .on("GuildCreationStartedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildCreationStartedEventName = "GuildCreationStartedMessage" as const;

export interface GuildCreationStartedPayload {
  [key: string]: unknown;
}

export class GuildCreationStartedReceive implements GuildCreationStartedPayload {
  _messageType = "GuildCreationStartedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildCreationStartedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildCreationStartedMessage" as const;
    this._isInitialized = true;
  }
}
