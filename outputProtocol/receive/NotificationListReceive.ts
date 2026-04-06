/**
 * NotificationListMessage — inferred from .on("NotificationListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const NotificationListEventName = "NotificationListMessage" as const;

export interface NotificationListPayload {
  flags?: unknown;
}

export class NotificationListReceive implements NotificationListPayload {
  _messageType = "NotificationListMessage" as const;
  flags?: unknown;
  _isInitialized = false;

  constructor(data: Partial<NotificationListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "NotificationListMessage" as const;
    this._isInitialized = true;
  }
}
