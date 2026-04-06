/**
 * GameActionFightCarryCharacterMessage — inferred from .on("GameActionFightCarryCharacterMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightCarryCharacterEventName = "GameActionFightCarryCharacterMessage" as const;

export interface GameActionFightCarryCharacterPayload {
  sourceId?: unknown;
  targetId?: unknown;
}

export class GameActionFightCarryCharacterReceive implements GameActionFightCarryCharacterPayload {
  _messageType = "GameActionFightCarryCharacterMessage" as const;
  sourceId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightCarryCharacterPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightCarryCharacterMessage" as const;
    this._isInitialized = true;
  }
}
