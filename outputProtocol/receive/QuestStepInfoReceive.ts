/**
 * QuestStepInfoMessage — inferred from .on("QuestStepInfoMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const QuestStepInfoEventName = "QuestStepInfoMessage" as const;

export interface QuestStepInfoPayload {
  infos?: {
    objectives?: unknown;
  };
}

export class QuestStepInfoReceive implements QuestStepInfoPayload {
  _messageType = "QuestStepInfoMessage" as const;
  infos?: {
    objectives?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<QuestStepInfoPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "QuestStepInfoMessage" as const;
    this._isInitialized = true;
  }
}
