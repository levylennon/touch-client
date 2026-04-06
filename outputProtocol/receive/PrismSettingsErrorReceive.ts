/**
 * PrismSettingsErrorMessage — inferred from .on("PrismSettingsErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PrismSettingsErrorEventName = "PrismSettingsErrorMessage" as const;

export interface PrismSettingsErrorPayload {
  [key: string]: unknown;
}

export class PrismSettingsErrorReceive implements PrismSettingsErrorPayload {
  _messageType = "PrismSettingsErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<PrismSettingsErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismSettingsErrorMessage" as const;
    this._isInitialized = true;
  }
}
