/**
 * GameRolePlayRemoveChallengeMessage — inferred from .on("GameRolePlayRemoveChallengeMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameRolePlayRemoveChallengeEventName = "GameRolePlayRemoveChallengeMessage" as const;

export interface GameRolePlayRemoveChallengePayload {
  fightId?: unknown;
}

export class GameRolePlayRemoveChallengeReceive implements GameRolePlayRemoveChallengePayload {
  _messageType = "GameRolePlayRemoveChallengeMessage" as const;
  fightId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayRemoveChallengePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayRemoveChallengeMessage" as const;
    this._isInitialized = true;
  }
}
