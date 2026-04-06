/**
 * ExchangeBidHouseTypeMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeBidHouseTypeMessageType = "ExchangeBidHouseTypeMessage" as const;

export interface ExchangeBidHouseTypePayload {
  type?: unknown;
}

export class ExchangeBidHouseTypeSend implements ExchangeBidHouseTypePayload {
  _messageType = "ExchangeBidHouseTypeMessage" as const;
  type?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidHouseTypePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidHouseTypeMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeBidHouseTypePayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeBidHouseTypePayload;
  }
}
