/**
 * AchievementDetailedListMessage — inferred from .on("AchievementDetailedListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AchievementDetailedListEventName = "AchievementDetailedListMessage" as const;

export interface AchievementDetailedListPayload {
  [key: string]: unknown;
}

export class AchievementDetailedListReceive implements AchievementDetailedListPayload {
  _messageType = "AchievementDetailedListMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<AchievementDetailedListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AchievementDetailedListMessage" as const;
    this._isInitialized = true;
  }
}
