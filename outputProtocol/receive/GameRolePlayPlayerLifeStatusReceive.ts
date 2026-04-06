/**
 * GameRolePlayPlayerLifeStatusMessage — inferred from .on("GameRolePlayPlayerLifeStatusMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameRolePlayPlayerLifeStatusEventName = "GameRolePlayPlayerLifeStatusMessage" as const;

export interface GameRolePlayPlayerLifeStatusPayload {
  state?: unknown;
}

export class GameRolePlayPlayerLifeStatusReceive implements GameRolePlayPlayerLifeStatusPayload {
  _messageType = "GameRolePlayPlayerLifeStatusMessage" as const;
  state?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayPlayerLifeStatusPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayPlayerLifeStatusMessage" as const;
    this._isInitialized = true;
  }
}
