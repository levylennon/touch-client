/**
 * QuestStepInfoRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const QuestStepInfoRequestMessageType = "QuestStepInfoRequestMessage" as const;

export interface QuestStepInfoRequestPayload {
  questId?: unknown;
}

export class QuestStepInfoRequestSend implements QuestStepInfoRequestPayload {
  _messageType = "QuestStepInfoRequestMessage" as const;
  questId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<QuestStepInfoRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "QuestStepInfoRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): QuestStepInfoRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as QuestStepInfoRequestPayload;
  }
}
