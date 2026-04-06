/**
 * ExchangeMountStableRemoveMessage — inferred from .on("ExchangeMountStableRemoveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeMountStableRemoveEventName = "ExchangeMountStableRemoveMessage" as const;

export interface ExchangeMountStableRemovePayload {
  [key: string]: unknown;
}

export class ExchangeMountStableRemoveReceive implements ExchangeMountStableRemovePayload {
  _messageType = "ExchangeMountStableRemoveMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeMountStableRemovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeMountStableRemoveMessage" as const;
    this._isInitialized = true;
  }
}
