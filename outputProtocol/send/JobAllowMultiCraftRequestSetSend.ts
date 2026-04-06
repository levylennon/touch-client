/**
 * JobAllowMultiCraftRequestSetMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const JobAllowMultiCraftRequestSetMessageType = "JobAllowMultiCraftRequestSetMessage" as const;

export interface JobAllowMultiCraftRequestSetPayload {
  enabled?: unknown;
  jobId?: unknown;
}

export class JobAllowMultiCraftRequestSetSend implements JobAllowMultiCraftRequestSetPayload {
  _messageType = "JobAllowMultiCraftRequestSetMessage" as const;
  enabled?: unknown;
  jobId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<JobAllowMultiCraftRequestSetPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobAllowMultiCraftRequestSetMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): JobAllowMultiCraftRequestSetPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as JobAllowMultiCraftRequestSetPayload;
  }
}
