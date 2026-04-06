/**
 * GameRolePlayGameOverMessage — inferred from .on("GameRolePlayGameOverMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameRolePlayGameOverEventName = "GameRolePlayGameOverMessage" as const;

export interface GameRolePlayGameOverPayload {
  [key: string]: unknown;
}

export class GameRolePlayGameOverReceive implements GameRolePlayGameOverPayload {
  _messageType = "GameRolePlayGameOverMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayGameOverPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayGameOverMessage" as const;
    this._isInitialized = true;
  }
}
