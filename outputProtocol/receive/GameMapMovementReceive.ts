/**
 * GameMapMovementMessage — inferred from .on("GameMapMovementMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameMapMovementEventName = "GameMapMovementMessage" as const;

export interface GameMapMovementPayload {
  actorId?: unknown;
  keyMovements?: {
    length?: unknown;
  };
}

export class GameMapMovementReceive implements GameMapMovementPayload {
  _messageType = "GameMapMovementMessage" as const;
  actorId?: unknown;
  keyMovements?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<GameMapMovementPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameMapMovementMessage" as const;
    this._isInitialized = true;
  }
}
