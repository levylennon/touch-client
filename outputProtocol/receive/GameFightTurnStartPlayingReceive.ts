/**
 * GameFightTurnStartPlayingMessage — inferred from .on("GameFightTurnStartPlayingMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightTurnStartPlayingEventName = "GameFightTurnStartPlayingMessage" as const;

export interface GameFightTurnStartPlayingPayload {
  [key: string]: unknown;
}

export class GameFightTurnStartPlayingReceive implements GameFightTurnStartPlayingPayload {
  _messageType = "GameFightTurnStartPlayingMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightTurnStartPlayingPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightTurnStartPlayingMessage" as const;
    this._isInitialized = true;
  }
}
