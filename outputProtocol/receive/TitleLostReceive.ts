/**
 * TitleLostMessage — inferred from .on("TitleLostMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TitleLostEventName = "TitleLostMessage" as const;

export interface TitleLostPayload {
  titleId?: unknown;
}

export class TitleLostReceive implements TitleLostPayload {
  _messageType = "TitleLostMessage" as const;
  titleId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TitleLostPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TitleLostMessage" as const;
    this._isInitialized = true;
  }
}
