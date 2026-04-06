/**
 * GameMapChangeOrientationsMessage — inferred from .on("GameMapChangeOrientationsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameMapChangeOrientationsEventName = "GameMapChangeOrientationsMessage" as const;

export interface GameMapChangeOrientationsPayload {
  orientations?: unknown;
}

export class GameMapChangeOrientationsReceive implements GameMapChangeOrientationsPayload {
  _messageType = "GameMapChangeOrientationsMessage" as const;
  orientations?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameMapChangeOrientationsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameMapChangeOrientationsMessage" as const;
    this._isInitialized = true;
  }
}
