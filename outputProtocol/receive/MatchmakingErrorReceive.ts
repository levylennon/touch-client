/**
 * MatchmakingErrorMessage — inferred from .on("MatchmakingErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MatchmakingErrorEventName = "MatchmakingErrorMessage" as const;

export interface MatchmakingErrorPayload {
  [key: string]: unknown;
}

export class MatchmakingErrorReceive implements MatchmakingErrorPayload {
  _messageType = "MatchmakingErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<MatchmakingErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MatchmakingErrorMessage" as const;
    this._isInitialized = true;
  }
}
