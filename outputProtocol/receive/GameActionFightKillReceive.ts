/**
 * GameActionFightKillMessage — inferred from .on("GameActionFightKillMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightKillEventName = "GameActionFightKillMessage" as const;

export interface GameActionFightKillPayload {
  sourceId?: unknown;
  targetId?: unknown;
}

export class GameActionFightKillReceive implements GameActionFightKillPayload {
  _messageType = "GameActionFightKillMessage" as const;
  sourceId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightKillPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightKillMessage" as const;
    this._isInitialized = true;
  }
}
