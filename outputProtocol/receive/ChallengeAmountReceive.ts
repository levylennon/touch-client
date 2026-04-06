/**
 * ChallengeAmountMessage — inferred from .on("ChallengeAmountMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChallengeAmountEventName = "ChallengeAmountMessage" as const;

export interface ChallengeAmountPayload {
  challengeAmount?: unknown;
}

export class ChallengeAmountReceive implements ChallengeAmountPayload {
  _messageType = "ChallengeAmountMessage" as const;
  challengeAmount?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChallengeAmountPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChallengeAmountMessage" as const;
    this._isInitialized = true;
  }
}
