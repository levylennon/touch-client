/**
 * GameContextDestroyMessage — inferred from .on("GameContextDestroyMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameContextDestroyEventName = "GameContextDestroyMessage" as const;

export interface GameContextDestroyPayload {
  [key: string]: unknown;
}

export class GameContextDestroyReceive implements GameContextDestroyPayload {
  _messageType = "GameContextDestroyMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameContextDestroyPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameContextDestroyMessage" as const;
    this._isInitialized = true;
  }
}
