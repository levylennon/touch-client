/**
 * ExchangeBuyOkMessage — inferred from .on("ExchangeBuyOkMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeBuyOkEventName = "ExchangeBuyOkMessage" as const;

export interface ExchangeBuyOkPayload {
  [key: string]: unknown;
}

export class ExchangeBuyOkReceive implements ExchangeBuyOkPayload {
  _messageType = "ExchangeBuyOkMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBuyOkPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBuyOkMessage" as const;
    this._isInitialized = true;
  }
}
