/**
 * ChatAdminServerMessage — inferred from .on("ChatAdminServerMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChatAdminServerEventName = "ChatAdminServerMessage" as const;

export interface ChatAdminServerPayload {
  [key: string]: unknown;
}

export class ChatAdminServerReceive implements ChatAdminServerPayload {
  _messageType = "ChatAdminServerMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChatAdminServerPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChatAdminServerMessage" as const;
    this._isInitialized = true;
  }
}
