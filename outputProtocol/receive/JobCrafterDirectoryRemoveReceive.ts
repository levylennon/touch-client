/**
 * JobCrafterDirectoryRemoveMessage — inferred from .on("JobCrafterDirectoryRemoveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const JobCrafterDirectoryRemoveEventName = "JobCrafterDirectoryRemoveMessage" as const;

export interface JobCrafterDirectoryRemovePayload {
  playerId?: unknown;
}

export class JobCrafterDirectoryRemoveReceive implements JobCrafterDirectoryRemovePayload {
  _messageType = "JobCrafterDirectoryRemoveMessage" as const;
  playerId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<JobCrafterDirectoryRemovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobCrafterDirectoryRemoveMessage" as const;
    this._isInitialized = true;
  }
}
