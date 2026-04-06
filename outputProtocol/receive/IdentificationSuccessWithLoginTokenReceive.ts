/**
 * IdentificationSuccessWithLoginTokenMessage — inferred from .on("IdentificationSuccessWithLoginTokenMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const IdentificationSuccessWithLoginTokenEventName = "IdentificationSuccessWithLoginTokenMessage" as const;

export interface IdentificationSuccessWithLoginTokenPayload {
  [key: string]: unknown;
}

export class IdentificationSuccessWithLoginTokenReceive implements IdentificationSuccessWithLoginTokenPayload {
  _messageType = "IdentificationSuccessWithLoginTokenMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<IdentificationSuccessWithLoginTokenPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "IdentificationSuccessWithLoginTokenMessage" as const;
    this._isInitialized = true;
  }
}
