/**
 * GameDataPaddockObjectListAddMessage — inferred from .on("GameDataPaddockObjectListAddMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameDataPaddockObjectListAddEventName = "GameDataPaddockObjectListAddMessage" as const;

export interface GameDataPaddockObjectListAddPayload {
  paddockItemDescription?: unknown;
}

export class GameDataPaddockObjectListAddReceive implements GameDataPaddockObjectListAddPayload {
  _messageType = "GameDataPaddockObjectListAddMessage" as const;
  paddockItemDescription?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameDataPaddockObjectListAddPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameDataPaddockObjectListAddMessage" as const;
    this._isInitialized = true;
  }
}
