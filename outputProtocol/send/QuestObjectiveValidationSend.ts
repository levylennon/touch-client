/**
 * QuestObjectiveValidationMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const QuestObjectiveValidationMessageType = "QuestObjectiveValidationMessage" as const;

export interface QuestObjectiveValidationPayload {
  objectiveId?: unknown | number;
  questId?: unknown;
}

export class QuestObjectiveValidationSend implements QuestObjectiveValidationPayload {
  _messageType = "QuestObjectiveValidationMessage" as const;
  objectiveId?: unknown | number;
  questId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<QuestObjectiveValidationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "QuestObjectiveValidationMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): QuestObjectiveValidationPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as QuestObjectiveValidationPayload;
  }
}
