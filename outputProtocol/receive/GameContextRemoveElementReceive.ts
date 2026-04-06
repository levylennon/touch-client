/**
 * GameContextRemoveElementMessage — inferred from .on("GameContextRemoveElementMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameContextRemoveElementEventName = "GameContextRemoveElementMessage" as const;

export interface GameContextRemoveElementPayload {
  id?: unknown;
}

export class GameContextRemoveElementReceive implements GameContextRemoveElementPayload {
  _messageType = "GameContextRemoveElementMessage" as const;
  id?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameContextRemoveElementPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameContextRemoveElementMessage" as const;
    this._isInitialized = true;
  }
}
