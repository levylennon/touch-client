/**
 * QuestObjectiveValidatedMessage — inferred from .on("QuestObjectiveValidatedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const QuestObjectiveValidatedEventName = "QuestObjectiveValidatedMessage" as const;

export interface QuestObjectiveValidatedPayload {
  objectiveId?: unknown;
  questId?: unknown;
}

export class QuestObjectiveValidatedReceive implements QuestObjectiveValidatedPayload {
  _messageType = "QuestObjectiveValidatedMessage" as const;
  objectiveId?: unknown;
  questId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<QuestObjectiveValidatedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "QuestObjectiveValidatedMessage" as const;
    this._isInitialized = true;
  }
}
