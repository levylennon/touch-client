/**
 * ExchangeReplayMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const ExchangeReplayMessageType = "ExchangeReplayMessage" as const;

export interface ExchangeReplayPayload {
  count?: unknown;
}

export class ExchangeReplaySend implements ExchangeReplayPayload {
  _messageType = "ExchangeReplayMessage" as const;
  count?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeReplayPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeReplayMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): ExchangeReplayPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as ExchangeReplayPayload;
  }
}
