/**
 * QuestListMessage — inferred from .on("QuestListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const QuestListEventName = "QuestListMessage" as const;

export interface QuestListPayload {
  activeQuests?: unknown;
  finishedQuestsCounts?: unknown;
  finishedQuestsIds?: unknown;
  startableQuestsIds?: unknown;
}

export class QuestListReceive implements QuestListPayload {
  _messageType = "QuestListMessage" as const;
  activeQuests?: unknown;
  finishedQuestsCounts?: unknown;
  finishedQuestsIds?: unknown;
  startableQuestsIds?: unknown;
  _isInitialized = false;

  constructor(data: Partial<QuestListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "QuestListMessage" as const;
    this._isInitialized = true;
  }
}
