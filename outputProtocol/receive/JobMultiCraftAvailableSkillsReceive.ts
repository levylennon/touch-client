/**
 * JobMultiCraftAvailableSkillsMessage — inferred from .on("JobMultiCraftAvailableSkillsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const JobMultiCraftAvailableSkillsEventName = "JobMultiCraftAvailableSkillsMessage" as const;

export interface JobMultiCraftAvailableSkillsPayload {
  [key: string]: unknown;
}

export class JobMultiCraftAvailableSkillsReceive implements JobMultiCraftAvailableSkillsPayload {
  _messageType = "JobMultiCraftAvailableSkillsMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<JobMultiCraftAvailableSkillsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobMultiCraftAvailableSkillsMessage" as const;
    this._isInitialized = true;
  }
}
