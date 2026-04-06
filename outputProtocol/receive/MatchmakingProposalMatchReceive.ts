/**
 * MatchmakingProposalMatchMessage — inferred from .on("MatchmakingProposalMatchMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MatchmakingProposalMatchEventName = "MatchmakingProposalMatchMessage" as const;

export interface MatchmakingProposalMatchPayload {
  _enrichData?: unknown;
  acceptanceDuration?: unknown;
  matchData?: unknown;
  matchmakingFeature?: unknown;
}

export class MatchmakingProposalMatchReceive implements MatchmakingProposalMatchPayload {
  _messageType = "MatchmakingProposalMatchMessage" as const;
  _enrichData?: unknown;
  acceptanceDuration?: unknown;
  matchData?: unknown;
  matchmakingFeature?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MatchmakingProposalMatchPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MatchmakingProposalMatchMessage" as const;
    this._isInitialized = true;
  }
}
