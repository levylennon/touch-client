/**
 * JobCrafterDirectoryListMessage — inferred from .on("JobCrafterDirectoryListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const JobCrafterDirectoryListEventName = "JobCrafterDirectoryListMessage" as const;

export interface JobCrafterDirectoryListPayload {
  listEntries?: unknown;
}

export class JobCrafterDirectoryListReceive implements JobCrafterDirectoryListPayload {
  _messageType = "JobCrafterDirectoryListMessage" as const;
  listEntries?: unknown;
  _isInitialized = false;

  constructor(data: Partial<JobCrafterDirectoryListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobCrafterDirectoryListMessage" as const;
    this._isInitialized = true;
  }
}
