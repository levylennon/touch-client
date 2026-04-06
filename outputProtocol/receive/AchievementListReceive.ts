/**
 * AchievementListMessage — inferred from .on("AchievementListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AchievementListEventName = "AchievementListMessage" as const;

export interface AchievementListPayload {
  accountAchievements?: {
    length?: unknown;
  };
  enrichData?: {
    achievementsTotal?: unknown;
    points?: unknown;
  };
  finishedAchievementsIds?: unknown;
  rewardableAchievements?: {
    length?: unknown;
  };
}

export class AchievementListReceive implements AchievementListPayload {
  _messageType = "AchievementListMessage" as const;
  accountAchievements?: {
    length?: unknown;
  };
  enrichData?: {
    achievementsTotal?: unknown;
    points?: unknown;
  };
  finishedAchievementsIds?: unknown;
  rewardableAchievements?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<AchievementListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AchievementListMessage" as const;
    this._isInitialized = true;
  }
}
