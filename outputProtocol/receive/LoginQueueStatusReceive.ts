/**
 * LoginQueueStatusMessage — inferred from .on("LoginQueueStatusMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const LoginQueueStatusEventName = "LoginQueueStatusMessage" as const;

export interface LoginQueueStatusPayload {
  position?: unknown;
  total?: unknown;
}

export class LoginQueueStatusReceive implements LoginQueueStatusPayload {
  _messageType = "LoginQueueStatusMessage" as const;
  position?: unknown;
  total?: unknown;
  _isInitialized = false;

  constructor(data: Partial<LoginQueueStatusPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LoginQueueStatusMessage" as const;
    this._isInitialized = true;
  }
}
