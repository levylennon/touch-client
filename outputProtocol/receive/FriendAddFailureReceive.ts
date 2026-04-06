/**
 * FriendAddFailureMessage — inferred from .on("FriendAddFailureMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const FriendAddFailureEventName = "FriendAddFailureMessage" as const;

export interface FriendAddFailurePayload {
  reason?: unknown;
}

export class FriendAddFailureReceive implements FriendAddFailurePayload {
  _messageType = "FriendAddFailureMessage" as const;
  reason?: unknown;
  _isInitialized = false;

  constructor(data: Partial<FriendAddFailurePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FriendAddFailureMessage" as const;
    this._isInitialized = true;
  }
}
