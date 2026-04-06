/**
 * GameRolePlayArenaUpdatePlayerInfosMessage — inferred from .on("GameRolePlayArenaUpdatePlayerInfosMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameRolePlayArenaUpdatePlayerInfosEventName = "GameRolePlayArenaUpdatePlayerInfosMessage" as const;

export interface GameRolePlayArenaUpdatePlayerInfosPayload {
  arenaFightcount?: unknown;
  hasClaimedDailyReward?: unknown;
  rank?: unknown;
  rankType?: unknown;
  victoryCount?: unknown;
}

export class GameRolePlayArenaUpdatePlayerInfosReceive implements GameRolePlayArenaUpdatePlayerInfosPayload {
  _messageType = "GameRolePlayArenaUpdatePlayerInfosMessage" as const;
  arenaFightcount?: unknown;
  hasClaimedDailyReward?: unknown;
  rank?: unknown;
  rankType?: unknown;
  victoryCount?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayArenaUpdatePlayerInfosPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayArenaUpdatePlayerInfosMessage" as const;
    this._isInitialized = true;
  }
}
