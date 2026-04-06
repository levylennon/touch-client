/**
 * ToARewardsGivenMessage — inferred from .on("ToARewardsGivenMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ToARewardsGivenEventName = "ToARewardsGivenMessage" as const;

export interface ToARewardsGivenPayload {
  rankId?: unknown;
}

export class ToARewardsGivenReceive implements ToARewardsGivenPayload {
  _messageType = "ToARewardsGivenMessage" as const;
  rankId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ToARewardsGivenPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ToARewardsGivenMessage" as const;
    this._isInitialized = true;
  }
}
