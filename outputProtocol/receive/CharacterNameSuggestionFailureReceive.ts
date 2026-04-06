/**
 * CharacterNameSuggestionFailureMessage — inferred from .on("CharacterNameSuggestionFailureMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CharacterNameSuggestionFailureEventName = "CharacterNameSuggestionFailureMessage" as const;

export interface CharacterNameSuggestionFailurePayload {
  [key: string]: unknown;
}

export class CharacterNameSuggestionFailureReceive implements CharacterNameSuggestionFailurePayload {
  _messageType = "CharacterNameSuggestionFailureMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterNameSuggestionFailurePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterNameSuggestionFailureMessage" as const;
    this._isInitialized = true;
  }
}
