/**
 * GameRolePlayPlayerFightFriendlyRequestedMessage — inferred from .on("GameRolePlayPlayerFightFriendlyRequestedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameRolePlayPlayerFightFriendlyRequestedEventName = "GameRolePlayPlayerFightFriendlyRequestedMessage" as const;

export interface GameRolePlayPlayerFightFriendlyRequestedPayload {
  [key: string]: unknown;
}

export class GameRolePlayPlayerFightFriendlyRequestedReceive implements GameRolePlayPlayerFightFriendlyRequestedPayload {
  _messageType = "GameRolePlayPlayerFightFriendlyRequestedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayPlayerFightFriendlyRequestedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayPlayerFightFriendlyRequestedMessage" as const;
    this._isInitialized = true;
  }
}
