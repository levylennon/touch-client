/**
 * QuestStepValidatedMessage — inferred from .on("QuestStepValidatedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const QuestStepValidatedEventName = "QuestStepValidatedMessage" as const;

export interface QuestStepValidatedPayload {
  questId?: unknown;
  stepId?: unknown;
}

export class QuestStepValidatedReceive implements QuestStepValidatedPayload {
  _messageType = "QuestStepValidatedMessage" as const;
  questId?: unknown;
  stepId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<QuestStepValidatedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "QuestStepValidatedMessage" as const;
    this._isInitialized = true;
  }
}
