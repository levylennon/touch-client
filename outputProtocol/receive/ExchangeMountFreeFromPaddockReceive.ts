/**
 * ExchangeMountFreeFromPaddockMessage — inferred from .on("ExchangeMountFreeFromPaddockMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeMountFreeFromPaddockEventName = "ExchangeMountFreeFromPaddockMessage" as const;

export interface ExchangeMountFreeFromPaddockPayload {
  [key: string]: unknown;
}

export class ExchangeMountFreeFromPaddockReceive implements ExchangeMountFreeFromPaddockPayload {
  _messageType = "ExchangeMountFreeFromPaddockMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeMountFreeFromPaddockPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeMountFreeFromPaddockMessage" as const;
    this._isInitialized = true;
  }
}
