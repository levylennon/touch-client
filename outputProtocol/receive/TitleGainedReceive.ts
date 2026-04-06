/**
 * TitleGainedMessage — inferred from .on("TitleGainedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TitleGainedEventName = "TitleGainedMessage" as const;

export interface TitleGainedPayload {
  titleId?: unknown;
}

export class TitleGainedReceive implements TitleGainedPayload {
  _messageType = "TitleGainedMessage" as const;
  titleId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TitleGainedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TitleGainedMessage" as const;
    this._isInitialized = true;
  }
}
