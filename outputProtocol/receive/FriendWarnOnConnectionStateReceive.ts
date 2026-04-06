/**
 * FriendWarnOnConnectionStateMessage — inferred from .on("FriendWarnOnConnectionStateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const FriendWarnOnConnectionStateEventName = "FriendWarnOnConnectionStateMessage" as const;

export interface FriendWarnOnConnectionStatePayload {
  enable?: unknown;
}

export class FriendWarnOnConnectionStateReceive implements FriendWarnOnConnectionStatePayload {
  _messageType = "FriendWarnOnConnectionStateMessage" as const;
  enable?: unknown;
  _isInitialized = false;

  constructor(data: Partial<FriendWarnOnConnectionStatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FriendWarnOnConnectionStateMessage" as const;
    this._isInitialized = true;
  }
}
