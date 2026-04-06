/**
 * ExchangeBidHouseListMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeBidHouseListMessageType = "ExchangeBidHouseListMessage" as const;

export interface ExchangeBidHouseListPayload {
  id?: unknown;
}

export class ExchangeBidHouseListSend implements ExchangeBidHouseListPayload {
  _messageType = "ExchangeBidHouseListMessage" as const;
  id?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidHouseListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidHouseListMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeBidHouseListPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeBidHouseListPayload;
  }
}
