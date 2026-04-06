/**
 * ExchangeMountPaddockAddMessage — inferred from .on("ExchangeMountPaddockAddMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeMountPaddockAddEventName = "ExchangeMountPaddockAddMessage" as const;

export interface ExchangeMountPaddockAddPayload {
  [key: string]: unknown;
}

export class ExchangeMountPaddockAddReceive implements ExchangeMountPaddockAddPayload {
  _messageType = "ExchangeMountPaddockAddMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeMountPaddockAddPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeMountPaddockAddMessage" as const;
    this._isInitialized = true;
  }
}
