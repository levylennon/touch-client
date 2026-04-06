/**
 * CompassUpdateMessage — inferred from .on("CompassUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const CompassUpdateEventName = "CompassUpdateMessage" as const;

export interface CompassUpdatePayload {
  [key: string]: unknown;
}

export class CompassUpdateReceive implements CompassUpdatePayload {
  _messageType = "CompassUpdateMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<CompassUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "CompassUpdateMessage" as const;
    this._isInitialized = true;
  }
}
