/**
 * ExchangeMountStableBornAddMessage — inferred from .on("ExchangeMountStableBornAddMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeMountStableBornAddEventName = "ExchangeMountStableBornAddMessage" as const;

export interface ExchangeMountStableBornAddPayload {
  mountDescription?: unknown;
}

export class ExchangeMountStableBornAddReceive implements ExchangeMountStableBornAddPayload {
  _messageType = "ExchangeMountStableBornAddMessage" as const;
  mountDescription?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeMountStableBornAddPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeMountStableBornAddMessage" as const;
    this._isInitialized = true;
  }
}
