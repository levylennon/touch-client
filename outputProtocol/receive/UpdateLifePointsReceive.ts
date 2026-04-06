/**
 * UpdateLifePointsMessage — inferred from .on("UpdateLifePointsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const UpdateLifePointsEventName = "UpdateLifePointsMessage" as const;

export interface UpdateLifePointsPayload {
  [key: string]: unknown;
}

export class UpdateLifePointsReceive implements UpdateLifePointsPayload {
  _messageType = "UpdateLifePointsMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<UpdateLifePointsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "UpdateLifePointsMessage" as const;
    this._isInitialized = true;
  }
}
