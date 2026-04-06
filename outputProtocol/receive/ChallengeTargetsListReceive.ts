/**
 * ChallengeTargetsListMessage — inferred from .on("ChallengeTargetsListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChallengeTargetsListEventName = "ChallengeTargetsListMessage" as const;

export interface ChallengeTargetsListPayload {
  targetCells?: {
    length?: unknown;
  };
}

export class ChallengeTargetsListReceive implements ChallengeTargetsListPayload {
  _messageType = "ChallengeTargetsListMessage" as const;
  targetCells?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<ChallengeTargetsListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChallengeTargetsListMessage" as const;
    this._isInitialized = true;
  }
}
