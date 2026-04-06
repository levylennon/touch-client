/**
 * PaddockToSellListMessage — inferred from .on("PaddockToSellListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PaddockToSellListEventName = "PaddockToSellListMessage" as const;

export interface PaddockToSellListPayload {
  paddockList?: unknown;
}

export class PaddockToSellListReceive implements PaddockToSellListPayload {
  _messageType = "PaddockToSellListMessage" as const;
  paddockList?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PaddockToSellListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PaddockToSellListMessage" as const;
    this._isInitialized = true;
  }
}
