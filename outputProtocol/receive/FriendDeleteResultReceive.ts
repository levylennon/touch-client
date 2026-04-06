/**
 * FriendDeleteResultMessage — inferred from .on("FriendDeleteResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const FriendDeleteResultEventName = "FriendDeleteResultMessage" as const;

export interface FriendDeleteResultPayload {
  name?: unknown;
  success?: unknown;
}

export class FriendDeleteResultReceive implements FriendDeleteResultPayload {
  _messageType = "FriendDeleteResultMessage" as const;
  name?: unknown;
  success?: unknown;
  _isInitialized = false;

  constructor(data: Partial<FriendDeleteResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FriendDeleteResultMessage" as const;
    this._isInitialized = true;
  }
}
