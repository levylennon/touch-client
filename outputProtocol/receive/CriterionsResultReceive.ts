/**
 * CriterionsResultMessage — inferred from .on("CriterionsResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CriterionsResultEventName = "CriterionsResultMessage" as const;

export interface CriterionsResultPayload {
  [key: string]: unknown;
}

export class CriterionsResultReceive implements CriterionsResultPayload {
  _messageType = "CriterionsResultMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<CriterionsResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CriterionsResultMessage" as const;
    this._isInitialized = true;
  }
}
