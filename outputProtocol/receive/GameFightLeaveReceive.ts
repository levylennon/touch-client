/**
 * GameFightLeaveMessage — inferred from .on("GameFightLeaveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameFightLeaveEventName = "GameFightLeaveMessage" as const;

export interface GameFightLeavePayload {
  charId?: unknown;
}

export class GameFightLeaveReceive implements GameFightLeavePayload {
  _messageType = "GameFightLeaveMessage" as const;
  charId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameFightLeavePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameFightLeaveMessage" as const;
    this._isInitialized = true;
  }
}
