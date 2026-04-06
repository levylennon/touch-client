/**
 * HouseToSellListMessage — inferred from .on("HouseToSellListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const HouseToSellListEventName = "HouseToSellListMessage" as const;

export interface HouseToSellListPayload {
  houseList?: unknown;
}

export class HouseToSellListReceive implements HouseToSellListPayload {
  _messageType = "HouseToSellListMessage" as const;
  houseList?: unknown;
  _isInitialized = false;

  constructor(data: Partial<HouseToSellListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "HouseToSellListMessage" as const;
    this._isInitialized = true;
  }
}
