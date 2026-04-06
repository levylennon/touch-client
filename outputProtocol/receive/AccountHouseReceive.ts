/**
 * AccountHouseMessage — inferred from .on("AccountHouseMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AccountHouseEventName = "AccountHouseMessage" as const;

export interface AccountHousePayload {
  houses?: {
    forEach?: unknown;
  };
}

export class AccountHouseReceive implements AccountHousePayload {
  _messageType = "AccountHouseMessage" as const;
  houses?: {
    forEach?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<AccountHousePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AccountHouseMessage" as const;
    this._isInitialized = true;
  }
}
