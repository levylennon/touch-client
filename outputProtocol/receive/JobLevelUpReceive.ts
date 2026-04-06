/**
 * JobLevelUpMessage — inferred from .on("JobLevelUpMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const JobLevelUpEventName = "JobLevelUpMessage" as const;

export interface JobLevelUpPayload {
  jobsDescription?: {
    jobId?: unknown;
    skills?: unknown;
  };
  newLevel?: unknown;
}

export class JobLevelUpReceive implements JobLevelUpPayload {
  _messageType = "JobLevelUpMessage" as const;
  jobsDescription?: {
    jobId?: unknown;
    skills?: unknown;
  };
  newLevel?: unknown;
  _isInitialized = false;

  constructor(data: Partial<JobLevelUpPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobLevelUpMessage" as const;
    this._isInitialized = true;
  }
}
