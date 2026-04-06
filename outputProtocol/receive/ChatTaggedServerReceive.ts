/**
 * ChatTaggedServerMessage — inferred from .on("ChatTaggedServerMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChatTaggedServerEventName = "ChatTaggedServerMessage" as const;

export interface ChatTaggedServerPayload {
  [key: string]: unknown;
}

export class ChatTaggedServerReceive implements ChatTaggedServerPayload {
  _messageType = "ChatTaggedServerMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChatTaggedServerPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChatTaggedServerMessage" as const;
    this._isInitialized = true;
  }
}
