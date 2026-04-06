/**
 * MountRidingMessage — inferred from .on("MountRidingMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MountRidingEventName = "MountRidingMessage" as const;

export interface MountRidingPayload {
  isRiding?: unknown;
}

export class MountRidingReceive implements MountRidingPayload {
  _messageType = "MountRidingMessage" as const;
  isRiding?: unknown;
  _isInitialized = false;

  constructor(data: Partial<MountRidingPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountRidingMessage" as const;
    this._isInitialized = true;
  }
}
