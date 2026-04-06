/**
 * JobAllowMultiCraftRequestMessage — inferred from .on("JobAllowMultiCraftRequestMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const JobAllowMultiCraftRequestEventName = "JobAllowMultiCraftRequestMessage" as const;

export interface JobAllowMultiCraftRequestPayload {
  enabled?: unknown;
}

export class JobAllowMultiCraftRequestReceive implements JobAllowMultiCraftRequestPayload {
  _messageType = "JobAllowMultiCraftRequestMessage" as const;
  enabled?: unknown;
  _isInitialized = false;

  constructor(data: Partial<JobAllowMultiCraftRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobAllowMultiCraftRequestMessage" as const;
    this._isInitialized = true;
  }
}
