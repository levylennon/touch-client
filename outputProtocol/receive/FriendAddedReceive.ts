/**
 * FriendAddedMessage — inferred from .on("FriendAddedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const FriendAddedEventName = "FriendAddedMessage" as const;

export interface FriendAddedPayload {
  friendAdded?: {
    accountId?: unknown;
  };
}

export class FriendAddedReceive implements FriendAddedPayload {
  _messageType = "FriendAddedMessage" as const;
  friendAdded?: {
    accountId?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<FriendAddedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FriendAddedMessage" as const;
    this._isInitialized = true;
  }
}
