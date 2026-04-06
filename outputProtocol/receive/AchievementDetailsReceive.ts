/**
 * AchievementDetailsMessage — inferred from .on("AchievementDetailsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AchievementDetailsEventName = "AchievementDetailsMessage" as const;

export interface AchievementDetailsPayload {
  achievement?: {
    finishedObjective?: unknown;
    id?: unknown;
    startedObjectives?: unknown;
  };
}

export class AchievementDetailsReceive implements AchievementDetailsPayload {
  _messageType = "AchievementDetailsMessage" as const;
  achievement?: {
    finishedObjective?: unknown;
    id?: unknown;
    startedObjectives?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<AchievementDetailsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AchievementDetailsMessage" as const;
    this._isInitialized = true;
  }
}
