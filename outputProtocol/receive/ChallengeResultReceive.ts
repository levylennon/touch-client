/**
 * ChallengeResultMessage — inferred from .on("ChallengeResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChallengeResultEventName = "ChallengeResultMessage" as const;

export interface ChallengeResultPayload {
  challengeId?: unknown;
  success?: unknown;
}

export class ChallengeResultReceive implements ChallengeResultPayload {
  _messageType = "ChallengeResultMessage" as const;
  challengeId?: unknown;
  success?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChallengeResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChallengeResultMessage" as const;
    this._isInitialized = true;
  }
}
