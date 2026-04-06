/**
 * GameDataPaddockObjectAddMessage — inferred from .on("GameDataPaddockObjectAddMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameDataPaddockObjectAddEventName = "GameDataPaddockObjectAddMessage" as const;

export interface GameDataPaddockObjectAddPayload {
  paddockItemDescription?: unknown;
}

export class GameDataPaddockObjectAddReceive implements GameDataPaddockObjectAddPayload {
  _messageType = "GameDataPaddockObjectAddMessage" as const;
  paddockItemDescription?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameDataPaddockObjectAddPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameDataPaddockObjectAddMessage" as const;
    this._isInitialized = true;
  }
}
