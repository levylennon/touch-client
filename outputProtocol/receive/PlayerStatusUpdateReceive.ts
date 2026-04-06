/**
 * PlayerStatusUpdateMessage — inferred from .on("PlayerStatusUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PlayerStatusUpdateEventName = "PlayerStatusUpdateMessage" as const;

export interface PlayerStatusUpdatePayload {
  accountId?: unknown;
  playerId?: unknown;
  status?: {
    statusId?: unknown;
  };
}

export class PlayerStatusUpdateReceive implements PlayerStatusUpdatePayload {
  _messageType = "PlayerStatusUpdateMessage" as const;
  accountId?: unknown;
  playerId?: unknown;
  status?: {
    statusId?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<PlayerStatusUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PlayerStatusUpdateMessage" as const;
    this._isInitialized = true;
  }
}
