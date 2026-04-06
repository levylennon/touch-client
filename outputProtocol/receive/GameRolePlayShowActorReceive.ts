/**
 * GameRolePlayShowActorMessage — inferred from .on("GameRolePlayShowActorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameRolePlayShowActorEventName = "GameRolePlayShowActorMessage" as const;

export interface GameRolePlayShowActorPayload {
  informations?: unknown;
}

export class GameRolePlayShowActorReceive implements GameRolePlayShowActorPayload {
  _messageType = "GameRolePlayShowActorMessage" as const;
  informations?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayShowActorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayShowActorMessage" as const;
    this._isInitialized = true;
  }
}
