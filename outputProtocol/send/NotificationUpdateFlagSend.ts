/**
 * NotificationUpdateFlagMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const NotificationUpdateFlagMessageType = "NotificationUpdateFlagMessage" as const;

export interface NotificationUpdateFlagPayload {
  index?: unknown;
}

export class NotificationUpdateFlagSend implements NotificationUpdateFlagPayload {
  _messageType = "NotificationUpdateFlagMessage" as const;
  index?: unknown;
  _isInitialized = false;

  constructor(data: Partial<NotificationUpdateFlagPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "NotificationUpdateFlagMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): NotificationUpdateFlagPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as NotificationUpdateFlagPayload;
  }
}
