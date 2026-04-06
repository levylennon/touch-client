/**
 * ChatUpdateMessage — inferred from .on("ChatUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChatUpdateEventName = "ChatUpdateMessage" as const;

export interface ChatUpdatePayload {
  id?: unknown;
  type?: unknown;
}

export class ChatUpdateReceive implements ChatUpdatePayload {
  _messageType = "ChatUpdateMessage" as const;
  id?: unknown;
  type?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChatUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChatUpdateMessage" as const;
    this._isInitialized = true;
  }
}
