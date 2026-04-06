/**
 * AlignmentRankUpdateMessage — inferred from .on("AlignmentRankUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AlignmentRankUpdateEventName = "AlignmentRankUpdateMessage" as const;

export interface AlignmentRankUpdatePayload {
  alignmentRank?: unknown;
}

export class AlignmentRankUpdateReceive implements AlignmentRankUpdatePayload {
  _messageType = "AlignmentRankUpdateMessage" as const;
  alignmentRank?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AlignmentRankUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AlignmentRankUpdateMessage" as const;
    this._isInitialized = true;
  }
}
