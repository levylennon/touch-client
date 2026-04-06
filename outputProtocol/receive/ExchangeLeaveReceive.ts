/**
 * ExchangeLeaveMessage — inferred from .on("ExchangeLeaveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeLeaveEventName = "ExchangeLeaveMessage" as const;

export interface ExchangeLeavePayload {
  [key: string]: unknown;
}

export class ExchangeLeaveReceive implements ExchangeLeavePayload {
  _messageType = "ExchangeLeaveMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeLeavePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeLeaveMessage" as const;
    this._isInitialized = true;
  }
}
