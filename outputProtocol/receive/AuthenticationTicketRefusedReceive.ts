/**
 * AuthenticationTicketRefusedMessage — inferred from .on("AuthenticationTicketRefusedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AuthenticationTicketRefusedEventName = "AuthenticationTicketRefusedMessage" as const;

export interface AuthenticationTicketRefusedPayload {
  [key: string]: unknown;
}

export class AuthenticationTicketRefusedReceive implements AuthenticationTicketRefusedPayload {
  _messageType = "AuthenticationTicketRefusedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<AuthenticationTicketRefusedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AuthenticationTicketRefusedMessage" as const;
    this._isInitialized = true;
  }
}
