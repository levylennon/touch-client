/**
 * GameEntityDispositionMessage — inferred from .on("GameEntityDispositionMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameEntityDispositionEventName = "GameEntityDispositionMessage" as const;

export interface GameEntityDispositionPayload {
  disposition?: unknown;
}

export class GameEntityDispositionReceive implements GameEntityDispositionPayload {
  _messageType = "GameEntityDispositionMessage" as const;
  disposition?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameEntityDispositionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameEntityDispositionMessage" as const;
    this._isInitialized = true;
  }
}
