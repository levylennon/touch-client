/**
 * BasicLatencyStatsRequestMessage — inferred from .on("BasicLatencyStatsRequestMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const BasicLatencyStatsRequestEventName = "BasicLatencyStatsRequestMessage" as const;

export interface BasicLatencyStatsRequestPayload {
  [key: string]: unknown;
}

export class BasicLatencyStatsRequestReceive implements BasicLatencyStatsRequestPayload {
  _messageType = "BasicLatencyStatsRequestMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<BasicLatencyStatsRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "BasicLatencyStatsRequestMessage" as const;
    this._isInitialized = true;
  }
}
