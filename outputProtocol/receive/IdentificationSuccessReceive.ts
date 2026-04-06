/**
 * IdentificationSuccessMessage — inferred from .on("IdentificationSuccessMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const IdentificationSuccessEventName = "IdentificationSuccessMessage" as const;

export interface IdentificationSuccessPayload {
  [key: string]: unknown;
}

export class IdentificationSuccessReceive implements IdentificationSuccessPayload {
  _messageType = "IdentificationSuccessMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<IdentificationSuccessPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "IdentificationSuccessMessage" as const;
    this._isInitialized = true;
  }
}
