/**
 * ContinueTOAWithCreditErrorMessage — inferred from .on("ContinueTOAWithCreditErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ContinueTOAWithCreditErrorEventName = "ContinueTOAWithCreditErrorMessage" as const;

export interface ContinueTOAWithCreditErrorPayload {
  reason?: unknown;
}

export class ContinueTOAWithCreditErrorReceive implements ContinueTOAWithCreditErrorPayload {
  _messageType = "ContinueTOAWithCreditErrorMessage" as const;
  reason?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ContinueTOAWithCreditErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ContinueTOAWithCreditErrorMessage" as const;
    this._isInitialized = true;
  }
}
