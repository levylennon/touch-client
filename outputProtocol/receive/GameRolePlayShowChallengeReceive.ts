/**
 * GameRolePlayShowChallengeMessage — inferred from .on("GameRolePlayShowChallengeMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameRolePlayShowChallengeEventName = "GameRolePlayShowChallengeMessage" as const;

export interface GameRolePlayShowChallengePayload {
  commonsInfos?: unknown;
}

export class GameRolePlayShowChallengeReceive implements GameRolePlayShowChallengePayload {
  _messageType = "GameRolePlayShowChallengeMessage" as const;
  commonsInfos?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayShowChallengePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayShowChallengeMessage" as const;
    this._isInitialized = true;
  }
}
