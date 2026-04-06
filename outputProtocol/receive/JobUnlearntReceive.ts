/**
 * JobUnlearntMessage — inferred from .on("JobUnlearntMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const JobUnlearntEventName = "JobUnlearntMessage" as const;

export interface JobUnlearntPayload {
  jobId?: unknown;
}

export class JobUnlearntReceive implements JobUnlearntPayload {
  _messageType = "JobUnlearntMessage" as const;
  jobId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<JobUnlearntPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobUnlearntMessage" as const;
    this._isInitialized = true;
  }
}
