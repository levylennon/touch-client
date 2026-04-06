/**
 * RerollDailyQuestNotificationMessage — inferred from .on("RerollDailyQuestNotificationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const RerollDailyQuestNotificationEventName = "RerollDailyQuestNotificationMessage" as const;

export interface RerollDailyQuestNotificationPayload {
  questId?: unknown;
}

export class RerollDailyQuestNotificationReceive implements RerollDailyQuestNotificationPayload {
  _messageType = "RerollDailyQuestNotificationMessage" as const;
  questId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<RerollDailyQuestNotificationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "RerollDailyQuestNotificationMessage" as const;
    this._isInitialized = true;
  }
}
