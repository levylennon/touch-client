/**
 * PrismUseRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const PrismUseRequestMessageType = "PrismUseRequestMessage" as const;

export interface PrismUseRequestPayload {
}

export class PrismUseRequestSend implements PrismUseRequestPayload {
  _messageType = "PrismUseRequestMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<PrismUseRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PrismUseRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): PrismUseRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as PrismUseRequestPayload;
  }
}
