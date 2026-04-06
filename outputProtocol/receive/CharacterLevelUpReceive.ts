/**
 * CharacterLevelUpMessage — inferred from .on("CharacterLevelUpMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CharacterLevelUpEventName = "CharacterLevelUpMessage" as const;

export interface CharacterLevelUpPayload {
  newLevel?: unknown;
}

export class CharacterLevelUpReceive implements CharacterLevelUpPayload {
  _messageType = "CharacterLevelUpMessage" as const;
  newLevel?: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterLevelUpPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterLevelUpMessage" as const;
    this._isInitialized = true;
  }
}
