/**
 * FriendsGetListMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const FriendsGetListMessageType = "FriendsGetListMessage" as const;

export interface FriendsGetListPayload {
}

export class FriendsGetListSend implements FriendsGetListPayload {
  _messageType = "FriendsGetListMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<FriendsGetListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FriendsGetListMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): FriendsGetListPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as FriendsGetListPayload;
  }
}
