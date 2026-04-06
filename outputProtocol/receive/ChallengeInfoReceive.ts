/**
 * ChallengeInfoMessage — inferred from .on("ChallengeInfoMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChallengeInfoEventName = "ChallengeInfoMessage" as const;

export interface ChallengeInfoPayload {
  [key: string]: unknown;
}

export class ChallengeInfoReceive implements ChallengeInfoPayload {
  _messageType = "ChallengeInfoMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChallengeInfoPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChallengeInfoMessage" as const;
    this._isInitialized = true;
  }
}
