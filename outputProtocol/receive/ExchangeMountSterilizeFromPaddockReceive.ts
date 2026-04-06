/**
 * ExchangeMountSterilizeFromPaddockMessage — inferred from .on("ExchangeMountSterilizeFromPaddockMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeMountSterilizeFromPaddockEventName = "ExchangeMountSterilizeFromPaddockMessage" as const;

export interface ExchangeMountSterilizeFromPaddockPayload {
  [key: string]: unknown;
}

export class ExchangeMountSterilizeFromPaddockReceive implements ExchangeMountSterilizeFromPaddockPayload {
  _messageType = "ExchangeMountSterilizeFromPaddockMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeMountSterilizeFromPaddockPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeMountSterilizeFromPaddockMessage" as const;
    this._isInitialized = true;
  }
}
