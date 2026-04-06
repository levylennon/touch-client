/**
 * JobCrafterDirectoryDefineSettingsMessage — generated from touch-client source-game/modules scan
 * Payload shape is inferred from sendMessage() call sites (may be incomplete).
 */

export const JobCrafterDirectoryDefineSettingsMessageType = "JobCrafterDirectoryDefineSettingsMessage" as const;

export interface JobCrafterDirectoryDefineSettingsPayload {
  settings?: unknown;
}

export class JobCrafterDirectoryDefineSettingsSend implements JobCrafterDirectoryDefineSettingsPayload {
  _messageType = "JobCrafterDirectoryDefineSettingsMessage" as const;
  settings?: unknown;
  _isInitialized = false;

  constructor(data: Partial<JobCrafterDirectoryDefineSettingsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "JobCrafterDirectoryDefineSettingsMessage" as const;
    this._isInitialized = true;
  }

  /** Plain object for sendMessage second argument (payload only). */
  toData(): JobCrafterDirectoryDefineSettingsPayload {
    const self = this as unknown as Record<string, unknown>;
    const o = { ...self };
    delete o._messageType;
    delete o._isInitialized;
    return o as JobCrafterDirectoryDefineSettingsPayload;
  }
}
