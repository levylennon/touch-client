/**
 * GameMapNoMovementMessage — inferred from .on("GameMapNoMovementMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameMapNoMovementEventName = "GameMapNoMovementMessage" as const;

export interface GameMapNoMovementPayload {
  [key: string]: unknown;
}

export class GameMapNoMovementReceive implements GameMapNoMovementPayload {
  _messageType = "GameMapNoMovementMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameMapNoMovementPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameMapNoMovementMessage" as const;
    this._isInitialized = true;
  }
}
