/**
 * GuildHousesInformationMessage — inferred from .on("GuildHousesInformationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GuildHousesInformationEventName = "GuildHousesInformationMessage" as const;

export interface GuildHousesInformationPayload {
  housesInformations?: {
    forEach?: unknown;
  };
}

export class GuildHousesInformationReceive implements GuildHousesInformationPayload {
  _messageType = "GuildHousesInformationMessage" as const;
  housesInformations?: {
    forEach?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<GuildHousesInformationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GuildHousesInformationMessage" as const;
    this._isInitialized = true;
  }
}
