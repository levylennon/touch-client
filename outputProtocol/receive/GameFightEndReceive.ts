/**
 * GameFightEndMessage — inferred from .on("GameFightEndMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightEndEventName = "GameFightEndMessage" as const;

export interface GameFightEndPayload {
  results?: {
    length?: unknown;
  };
}

export class GameFightEndReceive implements GameFightEndPayload {
  _messageType = "GameFightEndMessage" as const;
  results?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<GameFightEndPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightEndMessage" as const;
    this._isInitialized = true;
  }
}
