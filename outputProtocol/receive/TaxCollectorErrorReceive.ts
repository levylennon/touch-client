/**
 * TaxCollectorErrorMessage — inferred from .on("TaxCollectorErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TaxCollectorErrorEventName = "TaxCollectorErrorMessage" as const;

export interface TaxCollectorErrorPayload {
  reason?: unknown;
}

export class TaxCollectorErrorReceive implements TaxCollectorErrorPayload {
  _messageType = "TaxCollectorErrorMessage" as const;
  reason?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TaxCollectorErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TaxCollectorErrorMessage" as const;
    this._isInitialized = true;
  }
}
