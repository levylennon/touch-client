/**
 * GameFightResumeMessage — inferred from .on("GameFightResumeMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightResumeEventName = "GameFightResumeMessage" as const;

export interface GameFightResumePayload {
  [key: string]: unknown;
}

export class GameFightResumeReceive implements GameFightResumePayload {
  _messageType = "GameFightResumeMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightResumePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightResumeMessage" as const;
    this._isInitialized = true;
  }
}
