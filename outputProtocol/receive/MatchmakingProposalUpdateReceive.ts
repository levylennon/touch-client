/**
 * MatchmakingProposalUpdateMessage — inferred from .on("MatchmakingProposalUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MatchmakingProposalUpdateEventName = "MatchmakingProposalUpdateMessage" as const;

export interface MatchmakingProposalUpdatePayload {
  matchmakingFeature?: unknown;
}

export class MatchmakingProposalUpdateReceive implements MatchmakingProposalUpdatePayload {
  _messageType = "MatchmakingProposalUpdateMessage" as const;
  matchmakingFeature?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MatchmakingProposalUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MatchmakingProposalUpdateMessage" as const;
    this._isInitialized = true;
  }
}
