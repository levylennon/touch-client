/**
 * AchievementChallengeAmountMessage — inferred from .on("AchievementChallengeAmountMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AchievementChallengeAmountEventName = "AchievementChallengeAmountMessage" as const;

export interface AchievementChallengeAmountPayload {
  achievementChallengeAmount?: unknown;
}

export class AchievementChallengeAmountReceive implements AchievementChallengeAmountPayload {
  _messageType = "AchievementChallengeAmountMessage" as const;
  achievementChallengeAmount?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AchievementChallengeAmountPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AchievementChallengeAmountMessage" as const;
    this._isInitialized = true;
  }
}
