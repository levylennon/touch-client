/**
 * RecaptchaRequestMessage — inferred from .on("RecaptchaRequestMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const RecaptchaRequestEventName = "RecaptchaRequestMessage" as const;

export interface RecaptchaRequestPayload {
  enrichData?: {
    sitekey?: unknown;
  };
}

export class RecaptchaRequestReceive implements RecaptchaRequestPayload {
  _messageType = "RecaptchaRequestMessage" as const;
  enrichData?: {
    sitekey?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<RecaptchaRequestPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "RecaptchaRequestMessage" as const;
    this._isInitialized = true;
  }
}
