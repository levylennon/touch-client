/**
 * ChatSmileyRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ChatSmileyRequestMessageType = "ChatSmileyRequestMessage" as const;

export interface ChatSmileyRequestPayload {
  smileyId?: unknown;
}

export class ChatSmileyRequestSend implements ChatSmileyRequestPayload {
  _messageType = "ChatSmileyRequestMessage" as const;
  smileyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChatSmileyRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChatSmileyRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ChatSmileyRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ChatSmileyRequestPayload;
  }
}
