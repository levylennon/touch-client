/**
 * LoginInviteCodeReplyMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const LoginInviteCodeReplyMessageType = "LoginInviteCodeReplyMessage" as const;

export interface LoginInviteCodeReplyPayload {
  inviteCode?: unknown;
}

export class LoginInviteCodeReplySend implements LoginInviteCodeReplyPayload {
  _messageType = "LoginInviteCodeReplyMessage" as const;
  inviteCode?: unknown;
  _isInitialized = false;

  constructor(data: Partial<LoginInviteCodeReplyPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "LoginInviteCodeReplyMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): LoginInviteCodeReplyPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as LoginInviteCodeReplyPayload;
  }
}
