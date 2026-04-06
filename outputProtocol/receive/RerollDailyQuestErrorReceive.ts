/**
 * RerollDailyQuestErrorMessage — inferred from .on("RerollDailyQuestErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const RerollDailyQuestErrorEventName = "RerollDailyQuestErrorMessage" as const;

export interface RerollDailyQuestErrorPayload {
  [key: string]: unknown;
}

export class RerollDailyQuestErrorReceive implements RerollDailyQuestErrorPayload {
  _messageType = "RerollDailyQuestErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<RerollDailyQuestErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "RerollDailyQuestErrorMessage" as const;
    this._isInitialized = true;
  }
}
