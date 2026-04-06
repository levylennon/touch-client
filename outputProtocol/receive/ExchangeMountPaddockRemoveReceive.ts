/**
 * ExchangeMountPaddockRemoveMessage — inferred from .on("ExchangeMountPaddockRemoveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeMountPaddockRemoveEventName = "ExchangeMountPaddockRemoveMessage" as const;

export interface ExchangeMountPaddockRemovePayload {
  [key: string]: unknown;
}

export class ExchangeMountPaddockRemoveReceive implements ExchangeMountPaddockRemovePayload {
  _messageType = "ExchangeMountPaddockRemoveMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeMountPaddockRemovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeMountPaddockRemoveMessage" as const;
    this._isInitialized = true;
  }
}
