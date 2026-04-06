/**
 * MountSetMessage — inferred from .on("MountSetMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MountSetEventName = "MountSetMessage" as const;

export interface MountSetPayload {
  mountData?: {
    level?: unknown;
  };
}

export class MountSetReceive implements MountSetPayload {
  _messageType = "MountSetMessage" as const;
  mountData?: {
    level?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<MountSetPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountSetMessage" as const;
    this._isInitialized = true;
  }
}
