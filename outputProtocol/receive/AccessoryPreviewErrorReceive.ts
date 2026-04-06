/**
 * AccessoryPreviewErrorMessage — inferred from .on("AccessoryPreviewErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AccessoryPreviewErrorEventName = "AccessoryPreviewErrorMessage" as const;

export interface AccessoryPreviewErrorPayload {
  error?: unknown;
}

export class AccessoryPreviewErrorReceive implements AccessoryPreviewErrorPayload {
  _messageType = "AccessoryPreviewErrorMessage" as const;
  error?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AccessoryPreviewErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AccessoryPreviewErrorMessage" as const;
    this._isInitialized = true;
  }
}
