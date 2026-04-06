/**
 * JobExperienceUpdateMessage — inferred from .on("JobExperienceUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const JobExperienceUpdateEventName = "JobExperienceUpdateMessage" as const;

export interface JobExperienceUpdatePayload {
  experiencesUpdate?: {
    jobId?: unknown;
  };
}

export class JobExperienceUpdateReceive implements JobExperienceUpdatePayload {
  _messageType = "JobExperienceUpdateMessage" as const;
  experiencesUpdate?: {
    jobId?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<JobExperienceUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobExperienceUpdateMessage" as const;
    this._isInitialized = true;
  }
}
