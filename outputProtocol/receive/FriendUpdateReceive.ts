/**
 * FriendUpdateMessage — inferred from .on("FriendUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const FriendUpdateEventName = "FriendUpdateMessage" as const;

export interface FriendUpdatePayload {
  friendUpdated?: {
    accountId?: unknown;
  };
}

export class FriendUpdateReceive implements FriendUpdatePayload {
  _messageType = "FriendUpdateMessage" as const;
  friendUpdated?: {
    accountId?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<FriendUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FriendUpdateMessage" as const;
    this._isInitialized = true;
  }
}
