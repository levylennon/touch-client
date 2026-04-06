/**
 * PaddockToSellFilterMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const PaddockToSellFilterMessageType = "PaddockToSellFilterMessage" as const;

export interface PaddockToSellFilterPayload {
  [key: string]: unknown;
}

export class PaddockToSellFilterSend implements PaddockToSellFilterPayload {
  _messageType = "PaddockToSellFilterMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<PaddockToSellFilterPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PaddockToSellFilterMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PaddockToSellFilterPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PaddockToSellFilterPayload;
  }
}
