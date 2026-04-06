/**
 * BasicLatencyStatsMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const BasicLatencyStatsMessageType = "BasicLatencyStatsMessage" as const;

export interface BasicLatencyStatsPayload {
  latency?: unknown;
  max?: unknown;
  sampleCount?: unknown;
}

export class BasicLatencyStatsSend implements BasicLatencyStatsPayload {
  _messageType = "BasicLatencyStatsMessage" as const;
  latency?: unknown;
  max?: unknown;
  sampleCount?: unknown;
  _isInitialized = false;

  constructor(data: Partial<BasicLatencyStatsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "BasicLatencyStatsMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): BasicLatencyStatsPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as BasicLatencyStatsPayload;
  }
}
