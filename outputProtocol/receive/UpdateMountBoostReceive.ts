/**
 * UpdateMountBoostMessage — inferred from .on("UpdateMountBoostMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const UpdateMountBoostEventName = "UpdateMountBoostMessage" as const;

export interface UpdateMountBoostPayload {
  [key: string]: unknown;
}

export class UpdateMountBoostReceive implements UpdateMountBoostPayload {
  _messageType = "UpdateMountBoostMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<UpdateMountBoostPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "UpdateMountBoostMessage" as const;
    this._isInitialized = true;
  }
}
