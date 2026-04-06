/**
 * AchievementRewardRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const AchievementRewardRequestMessageType = "AchievementRewardRequestMessage" as const;

export interface AchievementRewardRequestPayload {
  achievementId?: unknown;
}

export class AchievementRewardRequestSend implements AchievementRewardRequestPayload {
  _messageType = "AchievementRewardRequestMessage" as const;
  achievementId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AchievementRewardRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AchievementRewardRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): AchievementRewardRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as AchievementRewardRequestPayload;
  }
}
