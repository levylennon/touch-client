/**
 * NicknameRegistrationMessage — inferred from .on("NicknameRegistrationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const NicknameRegistrationEventName = "NicknameRegistrationMessage" as const;

export interface NicknameRegistrationPayload {
  [key: string]: unknown;
}

export class NicknameRegistrationReceive implements NicknameRegistrationPayload {
  _messageType = "NicknameRegistrationMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<NicknameRegistrationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "NicknameRegistrationMessage" as const;
    this._isInitialized = true;
  }
}
