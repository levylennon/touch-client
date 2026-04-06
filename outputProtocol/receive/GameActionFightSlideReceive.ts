/**
 * GameActionFightSlideMessage — inferred from .on("GameActionFightSlideMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightSlideEventName = "GameActionFightSlideMessage" as const;

export interface GameActionFightSlidePayload {
  endCellId?: unknown;
  startCellId?: unknown;
  targetId?: unknown;
}

export class GameActionFightSlideReceive implements GameActionFightSlidePayload {
  _messageType = "GameActionFightSlideMessage" as const;
  endCellId?: unknown;
  startCellId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightSlidePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightSlideMessage" as const;
    this._isInitialized = true;
  }
}
