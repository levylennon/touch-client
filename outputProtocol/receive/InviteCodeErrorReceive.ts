/**
 * InviteCodeErrorMessage — inferred from .on("InviteCodeErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InviteCodeErrorEventName = "InviteCodeErrorMessage" as const;

export interface InviteCodeErrorPayload {
  errorCode?: unknown;
}

export class InviteCodeErrorReceive implements InviteCodeErrorPayload {
  _messageType = "InviteCodeErrorMessage" as const;
  errorCode?: unknown;
  _isInitialized = false;

  constructor(data: Partial<InviteCodeErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InviteCodeErrorMessage" as const;
    this._isInitialized = true;
  }
}
