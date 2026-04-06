/**
 * MountDataMessage — inferred from .on("MountDataMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MountDataEventName = "MountDataMessage" as const;

export interface MountDataPayload {
  [key: string]: unknown;
}

export class MountDataReceive implements MountDataPayload {
  _messageType = "MountDataMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<MountDataPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountDataMessage" as const;
    this._isInitialized = true;
  }
}
