/**
 * OrnamentSelectErrorMessage — inferred from .on("OrnamentSelectErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const OrnamentSelectErrorEventName = "OrnamentSelectErrorMessage" as const;

export interface OrnamentSelectErrorPayload {
  [key: string]: unknown;
}

export class OrnamentSelectErrorReceive implements OrnamentSelectErrorPayload {
  _messageType = "OrnamentSelectErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<OrnamentSelectErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "OrnamentSelectErrorMessage" as const;
    this._isInitialized = true;
  }
}
