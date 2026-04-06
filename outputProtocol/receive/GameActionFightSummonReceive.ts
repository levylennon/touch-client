/**
 * GameActionFightSummonMessage — inferred from .on("GameActionFightSummonMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightSummonEventName = "GameActionFightSummonMessage" as const;

export interface GameActionFightSummonPayload {
  actionId?: unknown;
  sourceId?: unknown;
  summon?: unknown;
}

export class GameActionFightSummonReceive implements GameActionFightSummonPayload {
  _messageType = "GameActionFightSummonMessage" as const;
  actionId?: unknown;
  sourceId?: unknown;
  summon?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightSummonPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightSummonMessage" as const;
    this._isInitialized = true;
  }
}
