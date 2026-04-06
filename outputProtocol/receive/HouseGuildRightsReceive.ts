/**
 * HouseGuildRightsMessage — inferred from .on("HouseGuildRightsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const HouseGuildRightsEventName = "HouseGuildRightsMessage" as const;

export interface HouseGuildRightsPayload {
  guildInfo?: {
    guildEmblem?: unknown;
    guildName?: unknown;
  };
  rights?: unknown;
}

export class HouseGuildRightsReceive implements HouseGuildRightsPayload {
  _messageType = "HouseGuildRightsMessage" as const;
  guildInfo?: {
    guildEmblem?: unknown;
    guildName?: unknown;
  };
  rights?: unknown;
  _isInitialized = false;

  constructor(data: Partial<HouseGuildRightsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HouseGuildRightsMessage" as const;
    this._isInitialized = true;
  }
}
