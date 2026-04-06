/**
 * SocialInfoDataMessage — inferred from .on("SocialInfoDataMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SocialInfoDataEventName = "SocialInfoDataMessage" as const;

export interface SocialInfoDataPayload {
  contents?: unknown;
  infoTypes?: unknown;
}

export class SocialInfoDataReceive implements SocialInfoDataPayload {
  _messageType = "SocialInfoDataMessage" as const;
  contents?: unknown;
  infoTypes?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SocialInfoDataPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SocialInfoDataMessage" as const;
    this._isInitialized = true;
  }
}
