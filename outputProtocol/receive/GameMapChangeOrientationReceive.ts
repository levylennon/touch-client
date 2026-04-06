/**
 * GameMapChangeOrientationMessage — inferred from .on("GameMapChangeOrientationMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameMapChangeOrientationEventName = "GameMapChangeOrientationMessage" as const;

export interface GameMapChangeOrientationPayload {
  orientation?: unknown;
}

export class GameMapChangeOrientationReceive implements GameMapChangeOrientationPayload {
  _messageType = "GameMapChangeOrientationMessage" as const;
  orientation?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameMapChangeOrientationPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameMapChangeOrientationMessage" as const;
    this._isInitialized = true;
  }
}
