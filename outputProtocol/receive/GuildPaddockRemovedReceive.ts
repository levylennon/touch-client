/**
 * GuildPaddockRemovedMessage — inferred from .on("GuildPaddockRemovedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildPaddockRemovedEventName = "GuildPaddockRemovedMessage" as const;

export interface GuildPaddockRemovedPayload {
  paddockId?: unknown;
}

export class GuildPaddockRemovedReceive implements GuildPaddockRemovedPayload {
  _messageType = "GuildPaddockRemovedMessage" as const;
  paddockId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildPaddockRemovedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildPaddockRemovedMessage" as const;
    this._isInitialized = true;
  }
}
