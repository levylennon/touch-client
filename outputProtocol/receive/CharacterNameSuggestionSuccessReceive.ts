/**
 * CharacterNameSuggestionSuccessMessage — inferred from .on("CharacterNameSuggestionSuccessMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CharacterNameSuggestionSuccessEventName = "CharacterNameSuggestionSuccessMessage" as const;

export interface CharacterNameSuggestionSuccessPayload {
  suggestion?: unknown;
}

export class CharacterNameSuggestionSuccessReceive implements CharacterNameSuggestionSuccessPayload {
  _messageType = "CharacterNameSuggestionSuccessMessage" as const;
  suggestion?: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterNameSuggestionSuccessPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterNameSuggestionSuccessMessage" as const;
    this._isInitialized = true;
  }
}
