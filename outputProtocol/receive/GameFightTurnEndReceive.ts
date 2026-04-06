/**
 * GameFightTurnEndMessage — inferred from .on("GameFightTurnEndMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightTurnEndEventName = "GameFightTurnEndMessage" as const;

export interface GameFightTurnEndPayload {
  id?: unknown;
}

export class GameFightTurnEndReceive implements GameFightTurnEndPayload {
  _messageType = "GameFightTurnEndMessage" as const;
  id?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightTurnEndPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightTurnEndMessage" as const;
    this._isInitialized = true;
  }
}
