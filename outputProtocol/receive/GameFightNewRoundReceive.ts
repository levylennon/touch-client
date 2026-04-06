/**
 * GameFightNewRoundMessage — inferred from .on("GameFightNewRoundMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightNewRoundEventName = "GameFightNewRoundMessage" as const;

export interface GameFightNewRoundPayload {
  roundNumber?: unknown;
}

export class GameFightNewRoundReceive implements GameFightNewRoundPayload {
  _messageType = "GameFightNewRoundMessage" as const;
  roundNumber?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightNewRoundPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightNewRoundMessage" as const;
    this._isInitialized = true;
  }
}
