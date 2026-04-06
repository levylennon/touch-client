/**
 * GameDataPaddockObjectListRemoveMessage — inferred from .on("GameDataPaddockObjectListRemoveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameDataPaddockObjectListRemoveEventName = "GameDataPaddockObjectListRemoveMessage" as const;

export interface GameDataPaddockObjectListRemovePayload {
  cellIds?: {
    forEach?: unknown;
  };
}

export class GameDataPaddockObjectListRemoveReceive implements GameDataPaddockObjectListRemovePayload {
  _messageType = "GameDataPaddockObjectListRemoveMessage" as const;
  cellIds?: {
    forEach?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<GameDataPaddockObjectListRemovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameDataPaddockObjectListRemoveMessage" as const;
    this._isInitialized = true;
  }
}
