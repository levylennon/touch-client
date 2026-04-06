/**
 * ChatServerWithObjectMessage — inferred from .on("ChatServerWithObjectMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChatServerWithObjectEventName = "ChatServerWithObjectMessage" as const;

export interface ChatServerWithObjectPayload {
  [key: string]: unknown;
}

export class ChatServerWithObjectReceive implements ChatServerWithObjectPayload {
  _messageType = "ChatServerWithObjectMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChatServerWithObjectPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChatServerWithObjectMessage" as const;
    this._isInitialized = true;
  }
}
