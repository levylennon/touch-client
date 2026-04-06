/**
 * GameRolePlayPlayerFightFriendlyAnsweredMessage — inferred from .on("GameRolePlayPlayerFightFriendlyAnsweredMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameRolePlayPlayerFightFriendlyAnsweredEventName = "GameRolePlayPlayerFightFriendlyAnsweredMessage" as const;

export interface GameRolePlayPlayerFightFriendlyAnsweredPayload {
  sourceId?: unknown;
}

export class GameRolePlayPlayerFightFriendlyAnsweredReceive implements GameRolePlayPlayerFightFriendlyAnsweredPayload {
  _messageType = "GameRolePlayPlayerFightFriendlyAnsweredMessage" as const;
  sourceId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayPlayerFightFriendlyAnsweredPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayPlayerFightFriendlyAnsweredMessage" as const;
    this._isInitialized = true;
  }
}
