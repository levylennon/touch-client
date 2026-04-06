/**
 * FriendSetWarnOnConnectionMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const FriendSetWarnOnConnectionMessageType = "FriendSetWarnOnConnectionMessage" as const;

export interface FriendSetWarnOnConnectionPayload {
  enable?: unknown;
}

export class FriendSetWarnOnConnectionSend implements FriendSetWarnOnConnectionPayload {
  _messageType = "FriendSetWarnOnConnectionMessage" as const;
  enable?: unknown;
  _isInitialized = false;

  constructor(data: Partial<FriendSetWarnOnConnectionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FriendSetWarnOnConnectionMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): FriendSetWarnOnConnectionPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as FriendSetWarnOnConnectionPayload;
  }
}
