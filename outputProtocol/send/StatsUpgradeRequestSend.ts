/**
 * StatsUpgradeRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const StatsUpgradeRequestMessageType = "StatsUpgradeRequestMessage" as const;

export interface StatsUpgradeRequestPayload {
  boostPoint?: unknown;
  statId?: unknown;
  useAdditionnal?: unknown;
}

export class StatsUpgradeRequestSend implements StatsUpgradeRequestPayload {
  _messageType = "StatsUpgradeRequestMessage" as const;
  boostPoint?: unknown;
  statId?: unknown;
  useAdditionnal?: unknown;
  _isInitialized = false;

  constructor(data: Partial<StatsUpgradeRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "StatsUpgradeRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): StatsUpgradeRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as StatsUpgradeRequestPayload;
  }
}
