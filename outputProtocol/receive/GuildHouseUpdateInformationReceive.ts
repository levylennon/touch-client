/**
 * GuildHouseUpdateInformationMessage — inferred from .on("GuildHouseUpdateInformationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildHouseUpdateInformationEventName = "GuildHouseUpdateInformationMessage" as const;

export interface GuildHouseUpdateInformationPayload {
  housesInformations?: unknown;
}

export class GuildHouseUpdateInformationReceive implements GuildHouseUpdateInformationPayload {
  _messageType = "GuildHouseUpdateInformationMessage" as const;
  housesInformations?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GuildHouseUpdateInformationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildHouseUpdateInformationMessage" as const;
    this._isInitialized = true;
  }
}
