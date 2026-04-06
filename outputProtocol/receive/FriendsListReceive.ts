/**
 * FriendsListMessage — inferred from .on("FriendsListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const FriendsListEventName = "FriendsListMessage" as const;

export interface FriendsListPayload {
  friendsList?: unknown;
}

export class FriendsListReceive implements FriendsListPayload {
  _messageType = "FriendsListMessage" as const;
  friendsList?: unknown;
  _isInitialized = false;

  constructor(data: Partial<FriendsListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FriendsListMessage" as const;
    this._isInitialized = true;
  }
}
