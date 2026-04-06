/**
 * FriendSpouseFollowWithCompassRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const FriendSpouseFollowWithCompassRequestMessageType = "FriendSpouseFollowWithCompassRequestMessage" as const;

export interface FriendSpouseFollowWithCompassRequestPayload {
  enable?: unknown;
}

export class FriendSpouseFollowWithCompassRequestSend implements FriendSpouseFollowWithCompassRequestPayload {
  _messageType = "FriendSpouseFollowWithCompassRequestMessage" as const;
  enable?: unknown;
  _isInitialized = false;

  constructor(data: Partial<FriendSpouseFollowWithCompassRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FriendSpouseFollowWithCompassRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): FriendSpouseFollowWithCompassRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as FriendSpouseFollowWithCompassRequestPayload;
  }
}
