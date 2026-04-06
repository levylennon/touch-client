/**
 * JobCrafterDirectoryEntryMessage — inferred from .on("JobCrafterDirectoryEntryMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const JobCrafterDirectoryEntryEventName = "JobCrafterDirectoryEntryMessage" as const;

export interface JobCrafterDirectoryEntryPayload {
  [key: string]: unknown;
}

export class JobCrafterDirectoryEntryReceive implements JobCrafterDirectoryEntryPayload {
  _messageType = "JobCrafterDirectoryEntryMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<JobCrafterDirectoryEntryPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobCrafterDirectoryEntryMessage" as const;
    this._isInitialized = true;
  }
}
