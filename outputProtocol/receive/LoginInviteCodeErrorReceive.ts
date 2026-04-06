/**
 * LoginInviteCodeErrorMessage — inferred from .on("LoginInviteCodeErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const LoginInviteCodeErrorEventName = "LoginInviteCodeErrorMessage" as const;

export interface LoginInviteCodeErrorPayload {
  [key: string]: unknown;
}

export class LoginInviteCodeErrorReceive implements LoginInviteCodeErrorPayload {
  _messageType = "LoginInviteCodeErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<LoginInviteCodeErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LoginInviteCodeErrorMessage" as const;
    this._isInitialized = true;
  }
}
