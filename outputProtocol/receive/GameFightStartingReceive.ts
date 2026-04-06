/**
 * GameFightStartingMessage — inferred from .on("GameFightStartingMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightStartingEventName = "GameFightStartingMessage" as const;

export interface GameFightStartingPayload {
  fightType?: unknown;
}

export class GameFightStartingReceive implements GameFightStartingPayload {
  _messageType = "GameFightStartingMessage" as const;
  fightType?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightStartingPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightStartingMessage" as const;
    this._isInitialized = true;
  }
}
