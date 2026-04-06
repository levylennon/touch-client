/**
 * DisplayNumericalValueMessage — inferred from .on("DisplayNumericalValueMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const DisplayNumericalValueEventName = "DisplayNumericalValueMessage" as const;

export interface DisplayNumericalValuePayload {
  [key: string]: unknown;
}

export class DisplayNumericalValueReceive implements DisplayNumericalValuePayload {
  _messageType = "DisplayNumericalValueMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<DisplayNumericalValuePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "DisplayNumericalValueMessage" as const;
    this._isInitialized = true;
  }
}
