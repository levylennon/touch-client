/**
 * AuthenticationTicketMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const AuthenticationTicketMessageType = "AuthenticationTicketMessage" as const;

export interface AuthenticationTicketPayload {
  lang?: unknown;
  ticket?: unknown;
}

export class AuthenticationTicketSend implements AuthenticationTicketPayload {
  _messageType = "AuthenticationTicketMessage" as const;
  lang?: unknown;
  ticket?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AuthenticationTicketPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AuthenticationTicketMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): AuthenticationTicketPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as AuthenticationTicketPayload;
  }
}
