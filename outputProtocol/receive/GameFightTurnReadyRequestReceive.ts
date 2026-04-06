/**
 * GameFightTurnReadyRequestMessage — inferred from .on("GameFightTurnReadyRequestMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightTurnReadyRequestEventName = "GameFightTurnReadyRequestMessage" as const;

export interface GameFightTurnReadyRequestPayload {
  [key: string]: unknown;
}

export class GameFightTurnReadyRequestReceive implements GameFightTurnReadyRequestPayload {
  _messageType = "GameFightTurnReadyRequestMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightTurnReadyRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightTurnReadyRequestMessage" as const;
    this._isInitialized = true;
  }
}
