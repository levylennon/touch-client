/**
 * ChallengeRerollPriceMessage — inferred from .on("ChallengeRerollPriceMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChallengeRerollPriceEventName = "ChallengeRerollPriceMessage" as const;

export interface ChallengeRerollPricePayload {
  rerollPrice?: unknown;
}

export class ChallengeRerollPriceReceive implements ChallengeRerollPricePayload {
  _messageType = "ChallengeRerollPriceMessage" as const;
  rerollPrice?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChallengeRerollPricePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChallengeRerollPriceMessage" as const;
    this._isInitialized = true;
  }
}
