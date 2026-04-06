/**
 * PointInfoMessage — inferred from .on("PointInfoMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PointInfoEventName = "PointInfoMessage" as const;

export interface PointInfoPayload {
  [key: string]: unknown;
}

export class PointInfoReceive implements PointInfoPayload {
  _messageType = "PointInfoMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<PointInfoPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PointInfoMessage" as const;
    this._isInitialized = true;
  }
}
