/**
 * FighterStatsListMessage — inferred from .on("FighterStatsListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const FighterStatsListEventName = "FighterStatsListMessage" as const;

export interface FighterStatsListPayload {
  stats?: unknown;
}

export class FighterStatsListReceive implements FighterStatsListPayload {
  _messageType = "FighterStatsListMessage" as const;
  stats?: unknown;
  _isInitialized = false;

  constructor(data: Partial<FighterStatsListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FighterStatsListMessage" as const;
    this._isInitialized = true;
  }
}
