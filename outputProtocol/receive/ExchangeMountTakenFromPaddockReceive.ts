/**
 * ExchangeMountTakenFromPaddockMessage — inferred from .on("ExchangeMountTakenFromPaddockMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeMountTakenFromPaddockEventName = "ExchangeMountTakenFromPaddockMessage" as const;

export interface ExchangeMountTakenFromPaddockPayload {
  [key: string]: unknown;
}

export class ExchangeMountTakenFromPaddockReceive implements ExchangeMountTakenFromPaddockPayload {
  _messageType = "ExchangeMountTakenFromPaddockMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeMountTakenFromPaddockPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeMountTakenFromPaddockMessage" as const;
    this._isInitialized = true;
  }
}
