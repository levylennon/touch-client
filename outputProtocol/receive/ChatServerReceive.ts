/**
 * ChatServerMessage — inferred from .on("ChatServerMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChatServerEventName = "ChatServerMessage" as const;

export interface ChatServerPayload {
  [key: string]: unknown;
}

export class ChatServerReceive implements ChatServerPayload {
  _messageType = "ChatServerMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChatServerPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChatServerMessage" as const;
    this._isInitialized = true;
  }
}
