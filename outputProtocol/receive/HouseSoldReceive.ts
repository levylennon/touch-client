/**
 * HouseSoldMessage — inferred from .on("HouseSoldMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const HouseSoldEventName = "HouseSoldMessage" as const;

export interface HouseSoldPayload {
  buyerName?: unknown;
  houseId?: unknown;
  realPrice?: unknown;
}

export class HouseSoldReceive implements HouseSoldPayload {
  _messageType = "HouseSoldMessage" as const;
  buyerName?: unknown;
  houseId?: unknown;
  realPrice?: unknown;
  _isInitialized = false;

  constructor(data: Partial<HouseSoldPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HouseSoldMessage" as const;
    this._isInitialized = true;
  }
}
