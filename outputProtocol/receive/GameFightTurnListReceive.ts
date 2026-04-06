/**
 * GameFightTurnListMessage — inferred from .on("GameFightTurnListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightTurnListEventName = "GameFightTurnListMessage" as const;

export interface GameFightTurnListPayload {
  deadsIds?: unknown;
  fighters?: unknown;
  ids?: unknown;
}

export class GameFightTurnListReceive implements GameFightTurnListPayload {
  _messageType = "GameFightTurnListMessage" as const;
  deadsIds?: unknown;
  fighters?: unknown;
  ids?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightTurnListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightTurnListMessage" as const;
    this._isInitialized = true;
  }
}
