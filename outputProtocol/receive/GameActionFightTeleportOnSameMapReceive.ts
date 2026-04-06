/**
 * GameActionFightTeleportOnSameMapMessage — inferred from .on("GameActionFightTeleportOnSameMapMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const GameActionFightTeleportOnSameMapEventName = "GameActionFightTeleportOnSameMapMessage" as const;

export interface GameActionFightTeleportOnSameMapPayload {
  cellId?: unknown;
  targetId?: unknown;
}

export class GameActionFightTeleportOnSameMapReceive implements GameActionFightTeleportOnSameMapPayload {
  _messageType = "GameActionFightTeleportOnSameMapMessage" as const;
  cellId?: unknown;
  targetId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<GameActionFightTeleportOnSameMapPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "GameActionFightTeleportOnSameMapMessage" as const;
    this._isInitialized = true;
  }
}
