/**
 * JobExperienceMultiUpdateMessage — inferred from .on("JobExperienceMultiUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const JobExperienceMultiUpdateEventName = "JobExperienceMultiUpdateMessage" as const;

export interface JobExperienceMultiUpdatePayload {
  experiencesUpdate?: {
    length?: unknown;
  };
}

export class JobExperienceMultiUpdateReceive implements JobExperienceMultiUpdatePayload {
  _messageType = "JobExperienceMultiUpdateMessage" as const;
  experiencesUpdate?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<JobExperienceMultiUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobExperienceMultiUpdateMessage" as const;
    this._isInitialized = true;
  }
}
