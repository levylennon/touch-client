/**
 * StatsResetRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const StatsResetRequestMessageType = "StatsResetRequestMessage" as const;

export interface StatsResetRequestPayload {
  statIds?: unknown;
}

export class StatsResetRequestSend implements StatsResetRequestPayload {
  _messageType = "StatsResetRequestMessage" as const;
  statIds?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StatsResetRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StatsResetRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): StatsResetRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as StatsResetRequestPayload;
  }
}
