/**
 * DisplayNumericalValueWithAgeBonusMessage — inferred from .on("DisplayNumericalValueWithAgeBonusMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const DisplayNumericalValueWithAgeBonusEventName = "DisplayNumericalValueWithAgeBonusMessage" as const;

export interface DisplayNumericalValueWithAgeBonusPayload {
  [key: string]: unknown;
}

export class DisplayNumericalValueWithAgeBonusReceive implements DisplayNumericalValueWithAgeBonusPayload {
  _messageType = "DisplayNumericalValueWithAgeBonusMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<DisplayNumericalValueWithAgeBonusPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "DisplayNumericalValueWithAgeBonusMessage" as const;
    this._isInitialized = true;
  }
}
