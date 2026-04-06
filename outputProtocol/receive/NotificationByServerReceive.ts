/**
 * NotificationByServerMessage — inferred from .on("NotificationByServerMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const NotificationByServerEventName = "NotificationByServerMessage" as const;

export interface NotificationByServerPayload {
  id?: unknown;
  parameters?: unknown;
}

export class NotificationByServerReceive implements NotificationByServerPayload {
  _messageType = "NotificationByServerMessage" as const;
  id?: unknown;
  parameters?: unknown;
  _isInitialized = false;

  constructor(data: Partial<NotificationByServerPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "NotificationByServerMessage" as const;
    this._isInitialized = true;
  }
}
