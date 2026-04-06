/**
 * TitleSelectErrorMessage — inferred from .on("TitleSelectErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TitleSelectErrorEventName = "TitleSelectErrorMessage" as const;

export interface TitleSelectErrorPayload {
  [key: string]: unknown;
}

export class TitleSelectErrorReceive implements TitleSelectErrorPayload {
  _messageType = "TitleSelectErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<TitleSelectErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TitleSelectErrorMessage" as const;
    this._isInitialized = true;
  }
}
