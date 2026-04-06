/**
 * QuestStartedMessage — inferred from .on("QuestStartedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const QuestStartedEventName = "QuestStartedMessage" as const;

export interface QuestStartedPayload {
  questId?: unknown;
}

export class QuestStartedReceive implements QuestStartedPayload {
  _messageType = "QuestStartedMessage" as const;
  questId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<QuestStartedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "QuestStartedMessage" as const;
    this._isInitialized = true;
  }
}
