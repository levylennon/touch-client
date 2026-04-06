/**
 * GameActionFightTackledMessage — inferred from .on("GameActionFightTackledMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightTackledEventName = "GameActionFightTackledMessage" as const;

export interface GameActionFightTackledPayload {
  sourceId?: unknown;
}

export class GameActionFightTackledReceive implements GameActionFightTackledPayload {
  _messageType = "GameActionFightTackledMessage" as const;
  sourceId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightTackledPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightTackledMessage" as const;
    this._isInitialized = true;
  }
}
