/**
 * GameActionFightDeathMessage — inferred from .on("GameActionFightDeathMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightDeathEventName = "GameActionFightDeathMessage" as const;

export interface GameActionFightDeathPayload {
  targetId?: unknown;
}

export class GameActionFightDeathReceive implements GameActionFightDeathPayload {
  _messageType = "GameActionFightDeathMessage" as const;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightDeathPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightDeathMessage" as const;
    this._isInitialized = true;
  }
}
