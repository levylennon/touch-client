/**
 * AccountCapabilitiesMessage — inferred from .on("AccountCapabilitiesMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AccountCapabilitiesEventName = "AccountCapabilitiesMessage" as const;

export interface AccountCapabilitiesPayload {
  [key: string]: unknown;
}

export class AccountCapabilitiesReceive implements AccountCapabilitiesPayload {
  _messageType = "AccountCapabilitiesMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<AccountCapabilitiesPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AccountCapabilitiesMessage" as const;
    this._isInitialized = true;
  }
}
