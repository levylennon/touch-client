/**
 * CharacterDeletionErrorMessage — inferred from .on("CharacterDeletionErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CharacterDeletionErrorEventName = "CharacterDeletionErrorMessage" as const;

export interface CharacterDeletionErrorPayload {
  [key: string]: unknown;
}

export class CharacterDeletionErrorReceive implements CharacterDeletionErrorPayload {
  _messageType = "CharacterDeletionErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterDeletionErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterDeletionErrorMessage" as const;
    this._isInitialized = true;
  }
}
