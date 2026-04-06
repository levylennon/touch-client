/**
 * GameActionFightDropCharacterMessage — inferred from .on("GameActionFightDropCharacterMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightDropCharacterEventName = "GameActionFightDropCharacterMessage" as const;

export interface GameActionFightDropCharacterPayload {
  cellId?: unknown;
  sourceId?: unknown;
  targetId?: unknown;
}

export class GameActionFightDropCharacterReceive implements GameActionFightDropCharacterPayload {
  _messageType = "GameActionFightDropCharacterMessage" as const;
  cellId?: unknown;
  sourceId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightDropCharacterPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightDropCharacterMessage" as const;
    this._isInitialized = true;
  }
}
