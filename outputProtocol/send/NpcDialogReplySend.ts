/**
 * NpcDialogReplyMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const NpcDialogReplyMessageType = "NpcDialogReplyMessage" as const;

export interface NpcDialogReplyPayload {
  replyId?: unknown;
}

export class NpcDialogReplySend implements NpcDialogReplyPayload {
  _messageType = "NpcDialogReplyMessage" as const;
  replyId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<NpcDialogReplyPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "NpcDialogReplyMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): NpcDialogReplyPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as NpcDialogReplyPayload;
  }
}
