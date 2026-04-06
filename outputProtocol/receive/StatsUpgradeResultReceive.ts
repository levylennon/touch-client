/**
 * StatsUpgradeResultMessage — inferred from .on("StatsUpgradeResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const StatsUpgradeResultEventName = "StatsUpgradeResultMessage" as const;

export interface StatsUpgradeResultPayload {
  result?: unknown;
}

export class StatsUpgradeResultReceive implements StatsUpgradeResultPayload {
  _messageType = "StatsUpgradeResultMessage" as const;
  result?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StatsUpgradeResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StatsUpgradeResultMessage" as const;
    this._isInitialized = true;
  }
}
