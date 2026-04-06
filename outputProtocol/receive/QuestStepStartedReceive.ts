/**
 * QuestStepStartedMessage — inferred from .on("QuestStepStartedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const QuestStepStartedEventName = "QuestStepStartedMessage" as const;

export interface QuestStepStartedPayload {
  questId?: unknown;
  stepId?: unknown;
}

export class QuestStepStartedReceive implements QuestStepStartedPayload {
  _messageType = "QuestStepStartedMessage" as const;
  questId?: unknown;
  stepId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<QuestStepStartedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "QuestStepStartedMessage" as const;
    this._isInitialized = true;
  }
}
