/**
 * GameActionFightThrowCharacterMessage — inferred from .on("GameActionFightThrowCharacterMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightThrowCharacterEventName = "GameActionFightThrowCharacterMessage" as const;

export interface GameActionFightThrowCharacterPayload {
  cellId?: unknown;
  sourceId?: unknown;
  targetId?: unknown;
}

export class GameActionFightThrowCharacterReceive implements GameActionFightThrowCharacterPayload {
  _messageType = "GameActionFightThrowCharacterMessage" as const;
  cellId?: unknown;
  sourceId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightThrowCharacterPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightThrowCharacterMessage" as const;
    this._isInitialized = true;
  }
}
