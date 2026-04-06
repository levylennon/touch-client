/**
 * CharacterSelectedErrorMessage — inferred from .on("CharacterSelectedErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CharacterSelectedErrorEventName = "CharacterSelectedErrorMessage" as const;

export interface CharacterSelectedErrorPayload {
  [key: string]: unknown;
}

export class CharacterSelectedErrorReceive implements CharacterSelectedErrorPayload {
  _messageType = "CharacterSelectedErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterSelectedErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterSelectedErrorMessage" as const;
    this._isInitialized = true;
  }
}
