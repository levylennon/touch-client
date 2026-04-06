/**
 * AllianceLeftMessage — inferred from .on("AllianceLeftMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceLeftEventName = "AllianceLeftMessage" as const;

export interface AllianceLeftPayload {
  [key: string]: unknown;
}

export class AllianceLeftReceive implements AllianceLeftPayload {
  _messageType = "AllianceLeftMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceLeftPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceLeftMessage" as const;
    this._isInitialized = true;
  }
}
