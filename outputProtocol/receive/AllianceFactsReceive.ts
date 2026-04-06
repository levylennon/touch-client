/**
 * AllianceFactsMessage — inferred from .on("AllianceFactsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceFactsEventName = "AllianceFactsMessage" as const;

export interface AllianceFactsPayload {
  [key: string]: unknown;
}

export class AllianceFactsReceive implements AllianceFactsPayload {
  _messageType = "AllianceFactsMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceFactsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceFactsMessage" as const;
    this._isInitialized = true;
  }
}
