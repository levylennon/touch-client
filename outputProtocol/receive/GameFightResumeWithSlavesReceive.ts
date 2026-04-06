/**
 * GameFightResumeWithSlavesMessage — inferred from .on("GameFightResumeWithSlavesMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightResumeWithSlavesEventName = "GameFightResumeWithSlavesMessage" as const;

export interface GameFightResumeWithSlavesPayload {
  [key: string]: unknown;
}

export class GameFightResumeWithSlavesReceive implements GameFightResumeWithSlavesPayload {
  _messageType = "GameFightResumeWithSlavesMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightResumeWithSlavesPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightResumeWithSlavesMessage" as const;
    this._isInitialized = true;
  }
}
