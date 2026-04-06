/**
 * MimicryObjectErrorMessage — inferred from .on("MimicryObjectErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MimicryObjectErrorEventName = "MimicryObjectErrorMessage" as const;

export interface MimicryObjectErrorPayload {
  errorCode?: unknown;
  reason?: unknown;
}

export class MimicryObjectErrorReceive implements MimicryObjectErrorPayload {
  _messageType = "MimicryObjectErrorMessage" as const;
  errorCode?: unknown;
  reason?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MimicryObjectErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MimicryObjectErrorMessage" as const;
    this._isInitialized = true;
  }
}
