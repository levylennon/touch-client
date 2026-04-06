/**
 * AchievementRewardSuccessMessage — inferred from .on("AchievementRewardSuccessMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AchievementRewardSuccessEventName = "AchievementRewardSuccessMessage" as const;

export interface AchievementRewardSuccessPayload {
  achievementId?: unknown;
}

export class AchievementRewardSuccessReceive implements AchievementRewardSuccessPayload {
  _messageType = "AchievementRewardSuccessMessage" as const;
  achievementId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AchievementRewardSuccessPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AchievementRewardSuccessMessage" as const;
    this._isInitialized = true;
  }
}
