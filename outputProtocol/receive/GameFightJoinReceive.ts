/**
 * GameFightJoinMessage — inferred from .on("GameFightJoinMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightJoinEventName = "GameFightJoinMessage" as const;

export interface GameFightJoinPayload {
  canSayReady?: unknown;
  fightType?: unknown;
  isFightStarted?: unknown;
  isSpectator?: unknown;
}

export class GameFightJoinReceive implements GameFightJoinPayload {
  _messageType = "GameFightJoinMessage" as const;
  canSayReady?: unknown;
  fightType?: unknown;
  isFightStarted?: unknown;
  isSpectator?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightJoinPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightJoinMessage" as const;
    this._isInitialized = true;
  }
}
