/**
 * GameFightTurnStartSlaveMessage — inferred from .on("GameFightTurnStartSlaveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightTurnStartSlaveEventName = "GameFightTurnStartSlaveMessage" as const;

export interface GameFightTurnStartSlavePayload {
  [key: string]: unknown;
}

export class GameFightTurnStartSlaveReceive implements GameFightTurnStartSlavePayload {
  _messageType = "GameFightTurnStartSlaveMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightTurnStartSlavePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightTurnStartSlaveMessage" as const;
    this._isInitialized = true;
  }
}
