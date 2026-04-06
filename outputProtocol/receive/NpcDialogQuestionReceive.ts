/**
 * NpcDialogQuestionMessage — inferred from .on("NpcDialogQuestionMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const NpcDialogQuestionEventName = "NpcDialogQuestionMessage" as const;

export interface NpcDialogQuestionPayload {
  dialogParams?: unknown;
  messageId?: unknown;
  visibleReplies?: unknown;
}

export class NpcDialogQuestionReceive implements NpcDialogQuestionPayload {
  _messageType = "NpcDialogQuestionMessage" as const;
  dialogParams?: unknown;
  messageId?: unknown;
  visibleReplies?: unknown;
  _isInitialized = false;

  constructor(data: Partial<NpcDialogQuestionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "NpcDialogQuestionMessage" as const;
    this._isInitialized = true;
  }
}
