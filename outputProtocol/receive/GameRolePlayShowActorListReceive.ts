/**
 * GameRolePlayShowActorListMessage — inferred from .on("GameRolePlayShowActorListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameRolePlayShowActorListEventName = "GameRolePlayShowActorListMessage" as const;

export interface GameRolePlayShowActorListPayload {
  informations?: {
    forEach?: unknown;
  };
}

export class GameRolePlayShowActorListReceive implements GameRolePlayShowActorListPayload {
  _messageType = "GameRolePlayShowActorListMessage" as const;
  informations?: {
    forEach?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<GameRolePlayShowActorListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameRolePlayShowActorListMessage" as const;
    this._isInitialized = true;
  }
}
