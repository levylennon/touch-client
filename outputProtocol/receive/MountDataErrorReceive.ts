/**
 * MountDataErrorMessage — inferred from .on("MountDataErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MountDataErrorEventName = "MountDataErrorMessage" as const;

export interface MountDataErrorPayload {
  reason?: unknown;
}

export class MountDataErrorReceive implements MountDataErrorPayload {
  _messageType = "MountDataErrorMessage" as const;
  reason?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MountDataErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountDataErrorMessage" as const;
    this._isInitialized = true;
  }
}
