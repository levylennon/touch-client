/**
 * AccountLoggingKickedMessage — inferred from .on("AccountLoggingKickedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AccountLoggingKickedEventName = "AccountLoggingKickedMessage" as const;

export interface AccountLoggingKickedPayload {
  [key: string]: unknown;
}

export class AccountLoggingKickedReceive implements AccountLoggingKickedPayload {
  _messageType = "AccountLoggingKickedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<AccountLoggingKickedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AccountLoggingKickedMessage" as const;
    this._isInitialized = true;
  }
}
