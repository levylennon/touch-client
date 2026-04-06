/**
 * JobListedUpdateMessage — inferred from .on("JobListedUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const JobListedUpdateEventName = "JobListedUpdateMessage" as const;

export interface JobListedUpdatePayload {
  addedOrDeleted?: unknown;
  jobId?: unknown;
}

export class JobListedUpdateReceive implements JobListedUpdatePayload {
  _messageType = "JobListedUpdateMessage" as const;
  addedOrDeleted?: unknown;
  jobId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<JobListedUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobListedUpdateMessage" as const;
    this._isInitialized = true;
  }
}
