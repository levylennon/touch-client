/**
 * GameFightTurnResumeMessage — inferred from .on("GameFightTurnResumeMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightTurnResumeEventName = "GameFightTurnResumeMessage" as const;

export interface GameFightTurnResumePayload {
  [key: string]: unknown;
}

export class GameFightTurnResumeReceive implements GameFightTurnResumePayload {
  _messageType = "GameFightTurnResumeMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightTurnResumePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightTurnResumeMessage" as const;
    this._isInitialized = true;
  }
}
