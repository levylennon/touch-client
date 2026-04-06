/**
 * ChatServerCopyMessage — inferred from .on("ChatServerCopyMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChatServerCopyEventName = "ChatServerCopyMessage" as const;

export interface ChatServerCopyPayload {
  [key: string]: unknown;
}

export class ChatServerCopyReceive implements ChatServerCopyPayload {
  _messageType = "ChatServerCopyMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChatServerCopyPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChatServerCopyMessage" as const;
    this._isInitialized = true;
  }
}
