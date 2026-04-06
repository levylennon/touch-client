/**
 * CharactersListWithRemodelingMessage — inferred from .on("CharactersListWithRemodelingMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CharactersListWithRemodelingEventName = "CharactersListWithRemodelingMessage" as const;

export interface CharactersListWithRemodelingPayload {
  [key: string]: unknown;
}

export class CharactersListWithRemodelingReceive implements CharactersListWithRemodelingPayload {
  _messageType = "CharactersListWithRemodelingMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharactersListWithRemodelingPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharactersListWithRemodelingMessage" as const;
    this._isInitialized = true;
  }
}
