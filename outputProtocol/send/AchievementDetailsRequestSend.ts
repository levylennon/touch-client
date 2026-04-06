/**
 * AchievementDetailsRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const AchievementDetailsRequestMessageType = "AchievementDetailsRequestMessage" as const;

export interface AchievementDetailsRequestPayload {
  achievementId?: unknown;
}

export class AchievementDetailsRequestSend implements AchievementDetailsRequestPayload {
  _messageType = "AchievementDetailsRequestMessage" as const;
  achievementId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AchievementDetailsRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AchievementDetailsRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): AchievementDetailsRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as AchievementDetailsRequestPayload;
  }
}
