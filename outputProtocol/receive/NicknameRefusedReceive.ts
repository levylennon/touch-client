/**
 * NicknameRefusedMessage — inferred from .on("NicknameRefusedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const NicknameRefusedEventName = "NicknameRefusedMessage" as const;

export interface NicknameRefusedPayload {
  reason?: unknown;
}

export class NicknameRefusedReceive implements NicknameRefusedPayload {
  _messageType = "NicknameRefusedMessage" as const;
  reason?: unknown;
  _isInitialized = false;

  constructor(data: Partial<NicknameRefusedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "NicknameRefusedMessage" as const;
    this._isInitialized = true;
  }
}
