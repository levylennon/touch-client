/**
 * FarmBuyRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const FarmBuyRequestMessageType = "FarmBuyRequestMessage" as const;

export interface FarmBuyRequestPayload {
  proposedPrice?: unknown;
}

export class FarmBuyRequestSend implements FarmBuyRequestPayload {
  _messageType = "FarmBuyRequestMessage" as const;
  proposedPrice?: unknown;
  _isInitialized = false;

  constructor(data: Partial<FarmBuyRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FarmBuyRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): FarmBuyRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as FarmBuyRequestPayload;
  }
}
