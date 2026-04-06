/**
 * MountSterilizedMessage — inferred from .on("MountSterilizedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const MountSterilizedEventName = "MountSterilizedMessage" as const;

export interface MountSterilizedPayload {
  [key: string]: unknown;
}

export class MountSterilizedReceive implements MountSterilizedPayload {
  _messageType = "MountSterilizedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<MountSterilizedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "MountSterilizedMessage" as const;
    this._isInitialized = true;
  }
}
