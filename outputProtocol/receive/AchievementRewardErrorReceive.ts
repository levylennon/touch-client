/**
 * AchievementRewardErrorMessage — inferred from .on("AchievementRewardErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AchievementRewardErrorEventName = "AchievementRewardErrorMessage" as const;

export interface AchievementRewardErrorPayload {
  [key: string]: unknown;
}

export class AchievementRewardErrorReceive implements AchievementRewardErrorPayload {
  _messageType = "AchievementRewardErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<AchievementRewardErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AchievementRewardErrorMessage" as const;
    this._isInitialized = true;
  }
}
