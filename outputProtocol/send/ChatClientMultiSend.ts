/**
 * ChatClientMultiMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ChatClientMultiMessageType = "ChatClientMultiMessage" as const;

export interface ChatClientMultiPayload {
  channel?: number;
  content?: unknown;
}

export class ChatClientMultiSend implements ChatClientMultiPayload {
  _messageType = "ChatClientMultiMessage" as const;
  channel?: number;
  content?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChatClientMultiPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChatClientMultiMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ChatClientMultiPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ChatClientMultiPayload;
  }
}
