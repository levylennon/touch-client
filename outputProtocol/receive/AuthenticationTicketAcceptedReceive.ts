/**
 * AuthenticationTicketAcceptedMessage — inferred from .on("AuthenticationTicketAcceptedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AuthenticationTicketAcceptedEventName = "AuthenticationTicketAcceptedMessage" as const;

export interface AuthenticationTicketAcceptedPayload {
  [key: string]: unknown;
}

export class AuthenticationTicketAcceptedReceive implements AuthenticationTicketAcceptedPayload {
  _messageType = "AuthenticationTicketAcceptedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<AuthenticationTicketAcceptedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AuthenticationTicketAcceptedMessage" as const;
    this._isInitialized = true;
  }
}
