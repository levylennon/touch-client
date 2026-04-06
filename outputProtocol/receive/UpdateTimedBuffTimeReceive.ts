/**
 * UpdateTimedBuffTimeMessage — inferred from .on("UpdateTimedBuffTimeMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const UpdateTimedBuffTimeEventName = "UpdateTimedBuffTimeMessage" as const;

export interface UpdateTimedBuffTimePayload {
  buffType?: unknown;
  updatedTime?: unknown;
}

export class UpdateTimedBuffTimeReceive implements UpdateTimedBuffTimePayload {
  _messageType = "UpdateTimedBuffTimeMessage" as const;
  buffType?: unknown;
  updatedTime?: unknown;
  _isInitialized = false;

  constructor(data: Partial<UpdateTimedBuffTimePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "UpdateTimedBuffTimeMessage" as const;
    this._isInitialized = true;
  }
}
