/**
 * AchievementFinishedMessage — inferred from .on("AchievementFinishedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AchievementFinishedEventName = "AchievementFinishedMessage" as const;

export interface AchievementFinishedPayload {
  enrichData?: {
    categoryID?: unknown;
    points?: unknown;
  };
  id?: unknown;
  parentCategoryID?: unknown;
}

export class AchievementFinishedReceive implements AchievementFinishedPayload {
  _messageType = "AchievementFinishedMessage" as const;
  enrichData?: {
    categoryID?: unknown;
    points?: unknown;
  };
  id?: unknown;
  parentCategoryID?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AchievementFinishedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AchievementFinishedMessage" as const;
    this._isInitialized = true;
  }
}
