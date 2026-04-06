/**
 * FriendAddRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const FriendAddRequestMessageType = "FriendAddRequestMessage" as const;

export interface FriendAddRequestPayload {
  name?: unknown;
}

export class FriendAddRequestSend implements FriendAddRequestPayload {
  _messageType = "FriendAddRequestMessage" as const;
  name?: unknown;
  _isInitialized = false;

  constructor(data: Partial<FriendAddRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FriendAddRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): FriendAddRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as FriendAddRequestPayload;
  }
}
