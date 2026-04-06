/**
 * JobCrafterDirectoryAddMessage — inferred from .on("JobCrafterDirectoryAddMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const JobCrafterDirectoryAddEventName = "JobCrafterDirectoryAddMessage" as const;

export interface JobCrafterDirectoryAddPayload {
  listEntry?: {
    playerInfo?: {
      playerId?: unknown;
    };
  };
}

export class JobCrafterDirectoryAddReceive implements JobCrafterDirectoryAddPayload {
  _messageType = "JobCrafterDirectoryAddMessage" as const;
  listEntry?: {
    playerInfo?: {
      playerId?: unknown;
    };
  };
  _isInitialized = false;

  constructor(data: Partial<JobCrafterDirectoryAddPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobCrafterDirectoryAddMessage" as const;
    this._isInitialized = true;
  }
}
