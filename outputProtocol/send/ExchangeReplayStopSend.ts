/**
 * ExchangeReplayStopMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 * On wire: omit payload or pass undefined as the second argument to sendMessage.
 */

export const ExchangeReplayStopMessageType = "ExchangeReplayStopMessage" as const;

export interface ExchangeReplayStopPayload {
}

export class ExchangeReplayStopSend implements ExchangeReplayStopPayload {
  _messageType = "ExchangeReplayStopMessage" as const;
  _isInitialized = false;

  constructor(data: Partial<ExchangeReplayStopPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeReplayStopMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeReplayStopPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeReplayStopPayload;
  }
}
