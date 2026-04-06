/**
 * QuestStartRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const QuestStartRequestMessageType = "QuestStartRequestMessage" as const;

export interface QuestStartRequestPayload {
  questId?: unknown;
}

export class QuestStartRequestSend implements QuestStartRequestPayload {
  _messageType = "QuestStartRequestMessage" as const;
  questId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<QuestStartRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "QuestStartRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): QuestStartRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as QuestStartRequestPayload;
  }
}
