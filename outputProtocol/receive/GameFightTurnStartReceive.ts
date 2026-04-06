/**
 * GameFightTurnStartMessage — inferred from .on("GameFightTurnStartMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightTurnStartEventName = "GameFightTurnStartMessage" as const;

export interface GameFightTurnStartPayload {
  [key: string]: unknown;
}

export class GameFightTurnStartReceive implements GameFightTurnStartPayload {
  _messageType = "GameFightTurnStartMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightTurnStartPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightTurnStartMessage" as const;
    this._isInitialized = true;
  }
}
