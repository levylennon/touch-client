/**
 * IgnoredGetListMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const IgnoredGetListMessageType = "IgnoredGetListMessage" as const;

export interface IgnoredGetListPayload {
}

export class IgnoredGetListSend implements IgnoredGetListPayload {
  _messageType = "IgnoredGetListMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<IgnoredGetListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "IgnoredGetListMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): IgnoredGetListPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as IgnoredGetListPayload;
  }
}
