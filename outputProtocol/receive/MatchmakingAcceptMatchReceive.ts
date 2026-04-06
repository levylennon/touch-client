/**
 * MatchmakingAcceptMatchMessage — inferred from .on("MatchmakingAcceptMatchMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MatchmakingAcceptMatchEventName = "MatchmakingAcceptMatchMessage" as const;

export interface MatchmakingAcceptMatchPayload {
  acceptanceResults?: unknown;
  matchmakingFeature?: unknown;
}

export class MatchmakingAcceptMatchReceive implements MatchmakingAcceptMatchPayload {
  _messageType = "MatchmakingAcceptMatchMessage" as const;
  acceptanceResults?: unknown;
  matchmakingFeature?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MatchmakingAcceptMatchPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MatchmakingAcceptMatchMessage" as const;
    this._isInitialized = true;
  }
}
