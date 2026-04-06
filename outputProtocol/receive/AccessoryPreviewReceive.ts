/**
 * AccessoryPreviewMessage — inferred from .on("AccessoryPreviewMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const AccessoryPreviewEventName = "AccessoryPreviewMessage" as const;

export interface AccessoryPreviewPayload {
  look?: unknown;
}

export class AccessoryPreviewReceive implements AccessoryPreviewPayload {
  _messageType = "AccessoryPreviewMessage" as const;
  look?: unknown;
  _isInitialized = false;

  constructor(data: Partial<AccessoryPreviewPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "AccessoryPreviewMessage" as const;
    this._isInitialized = true;
  }
}
