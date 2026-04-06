/**
 * SetCharacterRestrictionsMessage — inferred from .on("SetCharacterRestrictionsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SetCharacterRestrictionsEventName = "SetCharacterRestrictionsMessage" as const;

export interface SetCharacterRestrictionsPayload {
  restrictions?: unknown;
}

export class SetCharacterRestrictionsReceive implements SetCharacterRestrictionsPayload {
  _messageType = "SetCharacterRestrictionsMessage" as const;
  restrictions?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SetCharacterRestrictionsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SetCharacterRestrictionsMessage" as const;
    this._isInitialized = true;
  }
}
