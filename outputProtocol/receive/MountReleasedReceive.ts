/**
 * MountReleasedMessage — inferred from .on("MountReleasedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MountReleasedEventName = "MountReleasedMessage" as const;

export interface MountReleasedPayload {
  [key: string]: unknown;
}

export class MountReleasedReceive implements MountReleasedPayload {
  _messageType = "MountReleasedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<MountReleasedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountReleasedMessage" as const;
    this._isInitialized = true;
  }
}
