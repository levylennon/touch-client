/**
 * LoginInviteCodeRequiredMessage — inferred from .on("LoginInviteCodeRequiredMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const LoginInviteCodeRequiredEventName = "LoginInviteCodeRequiredMessage" as const;

export interface LoginInviteCodeRequiredPayload {
  [key: string]: unknown;
}

export class LoginInviteCodeRequiredReceive implements LoginInviteCodeRequiredPayload {
  _messageType = "LoginInviteCodeRequiredMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<LoginInviteCodeRequiredPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LoginInviteCodeRequiredMessage" as const;
    this._isInitialized = true;
  }
}
