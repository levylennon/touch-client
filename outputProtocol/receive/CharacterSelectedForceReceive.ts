/**
 * CharacterSelectedForceMessage — inferred from .on("CharacterSelectedForceMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CharacterSelectedForceEventName = "CharacterSelectedForceMessage" as const;

export interface CharacterSelectedForcePayload {
  [key: string]: unknown;
}

export class CharacterSelectedForceReceive implements CharacterSelectedForcePayload {
  _messageType = "CharacterSelectedForceMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<CharacterSelectedForcePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CharacterSelectedForceMessage" as const;
    this._isInitialized = true;
  }
}
