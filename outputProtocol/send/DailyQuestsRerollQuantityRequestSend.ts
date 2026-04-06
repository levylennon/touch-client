/**
 * DailyQuestsRerollQuantityRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const DailyQuestsRerollQuantityRequestMessageType = "DailyQuestsRerollQuantityRequestMessage" as const;

export interface DailyQuestsRerollQuantityRequestPayload {
}

export class DailyQuestsRerollQuantityRequestSend implements DailyQuestsRerollQuantityRequestPayload {
  _messageType = "DailyQuestsRerollQuantityRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<DailyQuestsRerollQuantityRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "DailyQuestsRerollQuantityRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): DailyQuestsRerollQuantityRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as DailyQuestsRerollQuantityRequestPayload;
  }
}
