/**
 * GuildModificationStartedMessage — inferred from .on("GuildModificationStartedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildModificationStartedEventName = "GuildModificationStartedMessage" as const;

export interface GuildModificationStartedPayload {
  canChangeEmblem?: unknown;
  canChangeName?: unknown;
}

export class GuildModificationStartedReceive implements GuildModificationStartedPayload {
  _messageType = "GuildModificationStartedMessage" as const;
  canChangeEmblem?: unknown;
  canChangeName?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildModificationStartedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildModificationStartedMessage" as const;
    this._isInitialized = true;
  }
}
