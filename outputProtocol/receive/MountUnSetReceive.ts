/**
 * MountUnSetMessage — inferred from .on("MountUnSetMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MountUnSetEventName = "MountUnSetMessage" as const;

export interface MountUnSetPayload {
  [key: string]: unknown;
}

export class MountUnSetReceive implements MountUnSetPayload {
  _messageType = "MountUnSetMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<MountUnSetPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountUnSetMessage" as const;
    this._isInitialized = true;
  }
}
