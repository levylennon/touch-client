/**
 * ExchangeStartOkMountMessage — inferred from .on("ExchangeStartOkMountMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeStartOkMountEventName = "ExchangeStartOkMountMessage" as const;

export interface ExchangeStartOkMountPayload {
  [key: string]: unknown;
}

export class ExchangeStartOkMountReceive implements ExchangeStartOkMountPayload {
  _messageType = "ExchangeStartOkMountMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeStartOkMountPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeStartOkMountMessage" as const;
    this._isInitialized = true;
  }
}
