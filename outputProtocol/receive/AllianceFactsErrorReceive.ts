/**
 * AllianceFactsErrorMessage — inferred from .on("AllianceFactsErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceFactsErrorEventName = "AllianceFactsErrorMessage" as const;

export interface AllianceFactsErrorPayload {
  [key: string]: unknown;
}

export class AllianceFactsErrorReceive implements AllianceFactsErrorPayload {
  _messageType = "AllianceFactsErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceFactsErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceFactsErrorMessage" as const;
    this._isInitialized = true;
  }
}
