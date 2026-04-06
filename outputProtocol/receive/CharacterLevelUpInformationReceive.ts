/**
 * CharacterLevelUpInformationMessage — inferred from .on("CharacterLevelUpInformationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CharacterLevelUpInformationEventName = "CharacterLevelUpInformationMessage" as const;

export interface CharacterLevelUpInformationPayload {
  id?: unknown;
}

export class CharacterLevelUpInformationReceive implements CharacterLevelUpInformationPayload {
  _messageType = "CharacterLevelUpInformationMessage" as const;
  id?: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterLevelUpInformationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterLevelUpInformationMessage" as const;
    this._isInitialized = true;
  }
}
