/**
 * LoginInviteCodeSuccessMessage — inferred from .on("LoginInviteCodeSuccessMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const LoginInviteCodeSuccessEventName = "LoginInviteCodeSuccessMessage" as const;

export interface LoginInviteCodeSuccessPayload {
  [key: string]: unknown;
}

export class LoginInviteCodeSuccessReceive implements LoginInviteCodeSuccessPayload {
  _messageType = "LoginInviteCodeSuccessMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<LoginInviteCodeSuccessPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LoginInviteCodeSuccessMessage" as const;
    this._isInitialized = true;
  }
}
