/**
 * GameContextRefreshEntityLookMessage — inferred from .on("GameContextRefreshEntityLookMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameContextRefreshEntityLookEventName = "GameContextRefreshEntityLookMessage" as const;

export interface GameContextRefreshEntityLookPayload {
  id?: unknown;
  look?: unknown;
}

export class GameContextRefreshEntityLookReceive implements GameContextRefreshEntityLookPayload {
  _messageType = "GameContextRefreshEntityLookMessage" as const;
  id?: unknown;
  look?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameContextRefreshEntityLookPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameContextRefreshEntityLookMessage" as const;
    this._isInitialized = true;
  }
}
