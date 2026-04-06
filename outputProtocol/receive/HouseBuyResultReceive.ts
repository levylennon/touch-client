/**
 * HouseBuyResultMessage — inferred from .on("HouseBuyResultMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const HouseBuyResultEventName = "HouseBuyResultMessage" as const;

export interface HouseBuyResultPayload {
  bought?: unknown;
  houseId?: unknown;
  realPrice?: unknown;
}

export class HouseBuyResultReceive implements HouseBuyResultPayload {
  _messageType = "HouseBuyResultMessage" as const;
  bought?: unknown;
  houseId?: unknown;
  realPrice?: unknown;
  _isInitialized = false;

  constructor(data: Partial<HouseBuyResultPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HouseBuyResultMessage" as const;
    this._isInitialized = true;
  }
}
