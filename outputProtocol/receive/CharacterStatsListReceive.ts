/**
 * CharacterStatsListMessage — inferred from .on("CharacterStatsListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CharacterStatsListEventName = "CharacterStatsListMessage" as const;

export interface CharacterStatsListPayload {
  stats?: {
    energyPoints?: unknown;
    kamas?: unknown;
  };
}

export class CharacterStatsListReceive implements CharacterStatsListPayload {
  _messageType = "CharacterStatsListMessage" as const;
  stats?: {
    energyPoints?: unknown;
    kamas?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<CharacterStatsListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterStatsListMessage" as const;
    this._isInitialized = true;
  }
}
