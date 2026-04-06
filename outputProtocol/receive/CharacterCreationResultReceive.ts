/**
 * CharacterCreationResultMessage — inferred from .on("CharacterCreationResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CharacterCreationResultEventName = "CharacterCreationResultMessage" as const;

export interface CharacterCreationResultPayload {
  result?: unknown;
}

export class CharacterCreationResultReceive implements CharacterCreationResultPayload {
  _messageType = "CharacterCreationResultMessage" as const;
  result?: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterCreationResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterCreationResultMessage" as const;
    this._isInitialized = true;
  }
}
