/**
 * GameContextCreateMessage — inferred from .on("GameContextCreateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameContextCreateEventName = "GameContextCreateMessage" as const;

export interface GameContextCreatePayload {
  context?: unknown;
}

export class GameContextCreateReceive implements GameContextCreatePayload {
  _messageType = "GameContextCreateMessage" as const;
  context?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameContextCreatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameContextCreateMessage" as const;
    this._isInitialized = true;
  }
}
