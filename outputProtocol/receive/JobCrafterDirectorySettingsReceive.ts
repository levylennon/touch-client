/**
 * JobCrafterDirectorySettingsMessage — inferred from .on("JobCrafterDirectorySettingsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const JobCrafterDirectorySettingsEventName = "JobCrafterDirectorySettingsMessage" as const;

export interface JobCrafterDirectorySettingsPayload {
  craftersSettings?: unknown;
}

export class JobCrafterDirectorySettingsReceive implements JobCrafterDirectorySettingsPayload {
  _messageType = "JobCrafterDirectorySettingsMessage" as const;
  craftersSettings?: unknown;
  _isInitialized = false;

  constructor(data: Partial<JobCrafterDirectorySettingsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobCrafterDirectorySettingsMessage" as const;
    this._isInitialized = true;
  }
}
