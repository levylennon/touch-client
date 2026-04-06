/**
 * FriendJoinRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const FriendJoinRequestMessageType = "FriendJoinRequestMessage" as const;

export interface FriendJoinRequestPayload {
  name?: unknown;
}

export class FriendJoinRequestSend implements FriendJoinRequestPayload {
  _messageType = "FriendJoinRequestMessage" as const;
  name?: unknown;
  _isInitialized = false;

  constructor(data: Partial<FriendJoinRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FriendJoinRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): FriendJoinRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as FriendJoinRequestPayload;
  }
}
