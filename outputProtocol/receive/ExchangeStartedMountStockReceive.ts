/**
 * ExchangeStartedMountStockMessage — inferred from .on("ExchangeStartedMountStockMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeStartedMountStockEventName = "ExchangeStartedMountStockMessage" as const;

export interface ExchangeStartedMountStockPayload {
  objectsInfos?: unknown;
}

export class ExchangeStartedMountStockReceive implements ExchangeStartedMountStockPayload {
  _messageType = "ExchangeStartedMountStockMessage" as const;
  objectsInfos?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeStartedMountStockPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeStartedMountStockMessage" as const;
    this._isInitialized = true;
  }
}
