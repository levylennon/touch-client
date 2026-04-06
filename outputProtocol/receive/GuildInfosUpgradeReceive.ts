/**
 * GuildInfosUpgradeMessage — inferred from .on("GuildInfosUpgradeMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildInfosUpgradeEventName = "GuildInfosUpgradeMessage" as const;

export interface GuildInfosUpgradePayload {
  [key: string]: unknown;
}

export class GuildInfosUpgradeReceive implements GuildInfosUpgradePayload {
  _messageType = "GuildInfosUpgradeMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildInfosUpgradePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildInfosUpgradeMessage" as const;
    this._isInitialized = true;
  }
}
