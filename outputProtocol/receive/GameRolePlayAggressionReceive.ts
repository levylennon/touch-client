/**
 * GameRolePlayAggressionMessage — inferred from .on("GameRolePlayAggressionMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameRolePlayAggressionEventName = "GameRolePlayAggressionMessage" as const;

export interface GameRolePlayAggressionPayload {
  [key: string]: unknown;
}

export class GameRolePlayAggressionReceive implements GameRolePlayAggressionPayload {
  _messageType = "GameRolePlayAggressionMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayAggressionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayAggressionMessage" as const;
    this._isInitialized = true;
  }
}
