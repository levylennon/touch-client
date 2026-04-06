/**
 * CharacterSelectedSuccessMessage — inferred from .on("CharacterSelectedSuccessMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CharacterSelectedSuccessEventName = "CharacterSelectedSuccessMessage" as const;

export interface CharacterSelectedSuccessPayload {
  [key: string]: unknown;
}

export class CharacterSelectedSuccessReceive implements CharacterSelectedSuccessPayload {
  _messageType = "CharacterSelectedSuccessMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterSelectedSuccessPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterSelectedSuccessMessage" as const;
    this._isInitialized = true;
  }
}
