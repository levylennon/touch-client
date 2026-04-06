/**
 * TitleSelectedMessage — inferred from .on("TitleSelectedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TitleSelectedEventName = "TitleSelectedMessage" as const;

export interface TitleSelectedPayload {
  titleId?: unknown;
}

export class TitleSelectedReceive implements TitleSelectedPayload {
  _messageType = "TitleSelectedMessage" as const;
  titleId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TitleSelectedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TitleSelectedMessage" as const;
    this._isInitialized = true;
  }
}
