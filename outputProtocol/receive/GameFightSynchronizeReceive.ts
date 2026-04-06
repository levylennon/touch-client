/**
 * GameFightSynchronizeMessage — inferred from .on("GameFightSynchronizeMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightSynchronizeEventName = "GameFightSynchronizeMessage" as const;

export interface GameFightSynchronizePayload {
  fighters?: unknown;
}

export class GameFightSynchronizeReceive implements GameFightSynchronizePayload {
  _messageType = "GameFightSynchronizeMessage" as const;
  fighters?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightSynchronizePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightSynchronizeMessage" as const;
    this._isInitialized = true;
  }
}
