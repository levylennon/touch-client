/**
 * GuildHouseRemoveMessage — inferred from .on("GuildHouseRemoveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildHouseRemoveEventName = "GuildHouseRemoveMessage" as const;

export interface GuildHouseRemovePayload {
  houseId?: unknown;
}

export class GuildHouseRemoveReceive implements GuildHouseRemovePayload {
  _messageType = "GuildHouseRemoveMessage" as const;
  houseId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildHouseRemovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildHouseRemoveMessage" as const;
    this._isInitialized = true;
  }
}
