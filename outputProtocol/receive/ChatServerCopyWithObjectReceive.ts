/**
 * ChatServerCopyWithObjectMessage — inferred from .on("ChatServerCopyWithObjectMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChatServerCopyWithObjectEventName = "ChatServerCopyWithObjectMessage" as const;

export interface ChatServerCopyWithObjectPayload {
  [key: string]: unknown;
}

export class ChatServerCopyWithObjectReceive implements ChatServerCopyWithObjectPayload {
  _messageType = "ChatServerCopyWithObjectMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChatServerCopyWithObjectPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChatServerCopyWithObjectMessage" as const;
    this._isInitialized = true;
  }
}
