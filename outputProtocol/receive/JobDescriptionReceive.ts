/**
 * JobDescriptionMessage — inferred from .on("JobDescriptionMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const JobDescriptionEventName = "JobDescriptionMessage" as const;

export interface JobDescriptionPayload {
  jobsDescription?: {
    length?: unknown;
  };
}

export class JobDescriptionReceive implements JobDescriptionPayload {
  _messageType = "JobDescriptionMessage" as const;
  jobsDescription?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<JobDescriptionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobDescriptionMessage" as const;
    this._isInitialized = true;
  }
}
