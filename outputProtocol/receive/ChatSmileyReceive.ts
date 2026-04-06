/**
 * ChatSmileyMessage — inferred from .on("ChatSmileyMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChatSmileyEventName = "ChatSmileyMessage" as const;

export interface ChatSmileyPayload {
  accountId?: unknown;
  entityId?: unknown;
  smileyId?: unknown;
}

export class ChatSmileyReceive implements ChatSmileyPayload {
  _messageType = "ChatSmileyMessage" as const;
  accountId?: unknown;
  entityId?: unknown;
  smileyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChatSmileyPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChatSmileyMessage" as const;
    this._isInitialized = true;
  }
}
