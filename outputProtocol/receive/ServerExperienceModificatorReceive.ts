/**
 * ServerExperienceModificatorMessage — inferred from .on("ServerExperienceModificatorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ServerExperienceModificatorEventName = "ServerExperienceModificatorMessage" as const;

export interface ServerExperienceModificatorPayload {
  experiencePercent?: unknown;
}

export class ServerExperienceModificatorReceive implements ServerExperienceModificatorPayload {
  _messageType = "ServerExperienceModificatorMessage" as const;
  experiencePercent?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ServerExperienceModificatorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ServerExperienceModificatorMessage" as const;
    this._isInitialized = true;
  }
}
