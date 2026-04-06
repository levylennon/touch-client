/**
 * ChatErrorMessage — inferred from .on("ChatErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChatErrorEventName = "ChatErrorMessage" as const;

export interface ChatErrorPayload {
  reason?: unknown;
}

export class ChatErrorReceive implements ChatErrorPayload {
  _messageType = "ChatErrorMessage" as const;
  reason?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChatErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChatErrorMessage" as const;
    this._isInitialized = true;
  }
}
