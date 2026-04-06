/**
 * GameEntitiesDispositionMessage — inferred from .on("GameEntitiesDispositionMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameEntitiesDispositionEventName = "GameEntitiesDispositionMessage" as const;

export interface GameEntitiesDispositionPayload {
  dispositions?: unknown;
}

export class GameEntitiesDispositionReceive implements GameEntitiesDispositionPayload {
  _messageType = "GameEntitiesDispositionMessage" as const;
  dispositions?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameEntitiesDispositionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameEntitiesDispositionMessage" as const;
    this._isInitialized = true;
  }
}
