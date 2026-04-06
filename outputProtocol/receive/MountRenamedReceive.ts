/**
 * MountRenamedMessage — inferred from .on("MountRenamedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MountRenamedEventName = "MountRenamedMessage" as const;

export interface MountRenamedPayload {
  [key: string]: unknown;
}

export class MountRenamedReceive implements MountRenamedPayload {
  _messageType = "MountRenamedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<MountRenamedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountRenamedMessage" as const;
    this._isInitialized = true;
  }
}
