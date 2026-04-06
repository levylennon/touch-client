/**
 * JobCrafterDirectoryListRequestMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const JobCrafterDirectoryListRequestMessageType = "JobCrafterDirectoryListRequestMessage" as const;

export interface JobCrafterDirectoryListRequestPayload {
  jobId?: unknown;
}

export class JobCrafterDirectoryListRequestSend implements JobCrafterDirectoryListRequestPayload {
  _messageType = "JobCrafterDirectoryListRequestMessage" as const;
  jobId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<JobCrafterDirectoryListRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobCrafterDirectoryListRequestMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): JobCrafterDirectoryListRequestPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as JobCrafterDirectoryListRequestPayload;
  }
}
