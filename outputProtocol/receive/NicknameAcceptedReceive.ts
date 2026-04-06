/**
 * NicknameAcceptedMessage — inferred from .on("NicknameAcceptedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const NicknameAcceptedEventName = "NicknameAcceptedMessage" as const;

export interface NicknameAcceptedPayload {
  [key: string]: unknown;
}

export class NicknameAcceptedReceive implements NicknameAcceptedPayload {
  _messageType = "NicknameAcceptedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<NicknameAcceptedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "NicknameAcceptedMessage" as const;
    this._isInitialized = true;
  }
}
