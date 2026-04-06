/**
 * UpdateSelfAgressableStatusMessage — inferred from .on("UpdateSelfAgressableStatusMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const UpdateSelfAgressableStatusEventName = "UpdateSelfAgressableStatusMessage" as const;

export interface UpdateSelfAgressableStatusPayload {
  status?: unknown;
}

export class UpdateSelfAgressableStatusReceive implements UpdateSelfAgressableStatusPayload {
  _messageType = "UpdateSelfAgressableStatusMessage" as const;
  status?: unknown;
  _isInitialized = false;

  constructor(data: Partial<UpdateSelfAgressableStatusPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "UpdateSelfAgressableStatusMessage" as const;
    this._isInitialized = true;
  }
}
