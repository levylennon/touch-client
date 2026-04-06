/**
 * PaddockToSellListRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * Payload may include fields not listed here.
 */

export const PaddockToSellListRequestMessageType = "PaddockToSellListRequestMessage" as const;

export interface PaddockToSellListRequestPayload {
  pageIndex?: number;
  [key: string]: unknown;
}

export class PaddockToSellListRequestSend implements PaddockToSellListRequestPayload {
  _messageType = "PaddockToSellListRequestMessage" as const;
  pageIndex?: number;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<PaddockToSellListRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PaddockToSellListRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PaddockToSellListRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PaddockToSellListRequestPayload;
  }
}
