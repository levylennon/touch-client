/**
 * GameMapRestrictedMovementMessage — inferred from .on("GameMapRestrictedMovementMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameMapRestrictedMovementEventName = "GameMapRestrictedMovementMessage" as const;

export interface GameMapRestrictedMovementPayload {
  [key: string]: unknown;
}

export class GameMapRestrictedMovementReceive implements GameMapRestrictedMovementPayload {
  _messageType = "GameMapRestrictedMovementMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameMapRestrictedMovementPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameMapRestrictedMovementMessage" as const;
    this._isInitialized = true;
  }
}
