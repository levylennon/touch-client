/**
 * ChallengeTargetUpdateMessage — inferred from .on("ChallengeTargetUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChallengeTargetUpdateEventName = "ChallengeTargetUpdateMessage" as const;

export interface ChallengeTargetUpdatePayload {
  challengeId?: unknown;
  targetId?: unknown;
}

export class ChallengeTargetUpdateReceive implements ChallengeTargetUpdatePayload {
  _messageType = "ChallengeTargetUpdateMessage" as const;
  challengeId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChallengeTargetUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChallengeTargetUpdateMessage" as const;
    this._isInitialized = true;
  }
}
