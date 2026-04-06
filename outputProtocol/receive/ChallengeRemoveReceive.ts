/**
 * ChallengeRemoveMessage — inferred from .on("ChallengeRemoveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ChallengeRemoveEventName = "ChallengeRemoveMessage" as const;

export interface ChallengeRemovePayload {
  [key: string]: unknown;
}

export class ChallengeRemoveReceive implements ChallengeRemovePayload {
  _messageType = "ChallengeRemoveMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ChallengeRemovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ChallengeRemoveMessage" as const;
    this._isInitialized = true;
  }
}
