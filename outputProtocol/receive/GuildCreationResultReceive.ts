/**
 * GuildCreationResultMessage — inferred from .on("GuildCreationResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildCreationResultEventName = "GuildCreationResultMessage" as const;

export interface GuildCreationResultPayload {
  result?: unknown;
}

export class GuildCreationResultReceive implements GuildCreationResultPayload {
  _messageType = "GuildCreationResultMessage" as const;
  result?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildCreationResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildCreationResultMessage" as const;
    this._isInitialized = true;
  }
}
