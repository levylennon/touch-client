/**
 * CharactersListMessage — inferred from .on("CharactersListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CharactersListEventName = "CharactersListMessage" as const;

export interface CharactersListPayload {
  [key: string]: unknown;
}

export class CharactersListReceive implements CharactersListPayload {
  _messageType = "CharactersListMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharactersListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharactersListMessage" as const;
    this._isInitialized = true;
  }
}
