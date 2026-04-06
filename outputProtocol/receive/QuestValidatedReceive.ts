/**
 * QuestValidatedMessage — inferred from .on("QuestValidatedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const QuestValidatedEventName = "QuestValidatedMessage" as const;

export interface QuestValidatedPayload {
  questId?: unknown;
}

export class QuestValidatedReceive implements QuestValidatedPayload {
  _messageType = "QuestValidatedMessage" as const;
  questId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<QuestValidatedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "QuestValidatedMessage" as const;
    this._isInitialized = true;
  }
}
