/**
 * ExchangeStartOkMulticraftCrafterMessage — inferred from .on("ExchangeStartOkMulticraftCrafterMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeStartOkMulticraftCrafterEventName = "ExchangeStartOkMulticraftCrafterMessage" as const;

export interface ExchangeStartOkMulticraftCrafterPayload {
  [key: string]: unknown;
}

export class ExchangeStartOkMulticraftCrafterReceive implements ExchangeStartOkMulticraftCrafterPayload {
  _messageType = "ExchangeStartOkMulticraftCrafterMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeStartOkMulticraftCrafterPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeStartOkMulticraftCrafterMessage" as const;
    this._isInitialized = true;
  }
}
