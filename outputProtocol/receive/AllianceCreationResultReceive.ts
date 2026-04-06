/**
 * AllianceCreationResultMessage — inferred from .on("AllianceCreationResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AllianceCreationResultEventName = "AllianceCreationResultMessage" as const;

export interface AllianceCreationResultPayload {
  result?: unknown;
}

export class AllianceCreationResultReceive implements AllianceCreationResultPayload {
  _messageType = "AllianceCreationResultMessage" as const;
  result?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AllianceCreationResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AllianceCreationResultMessage" as const;
    this._isInitialized = true;
  }
}
