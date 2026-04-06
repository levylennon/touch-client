/**
 * MatchmakingStatusMessage — inferred from .on("MatchmakingStatusMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MatchmakingStatusEventName = "MatchmakingStatusMessage" as const;

export interface MatchmakingStatusPayload {
  data?: unknown;
  matchmakingFeature?: unknown;
  matchmakingStatus?: unknown;
}

export class MatchmakingStatusReceive implements MatchmakingStatusPayload {
  _messageType = "MatchmakingStatusMessage" as const;
  data?: unknown;
  matchmakingFeature?: unknown;
  matchmakingStatus?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MatchmakingStatusPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MatchmakingStatusMessage" as const;
    this._isInitialized = true;
  }
}
