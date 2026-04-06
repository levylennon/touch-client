/**
 * GameFightStartMessage — inferred from .on("GameFightStartMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightStartEventName = "GameFightStartMessage" as const;

export interface GameFightStartPayload {
  [key: string]: unknown;
}

export class GameFightStartReceive implements GameFightStartPayload {
  _messageType = "GameFightStartMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightStartPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightStartMessage" as const;
    this._isInitialized = true;
  }
}
