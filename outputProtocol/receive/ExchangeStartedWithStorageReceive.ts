/**
 * ExchangeStartedWithStorageMessage — inferred from .on("ExchangeStartedWithStorageMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeStartedWithStorageEventName = "ExchangeStartedWithStorageMessage" as const;

export interface ExchangeStartedWithStoragePayload {
  exchangeType?: unknown;
  storageMaxSlot?: unknown;
}

export class ExchangeStartedWithStorageReceive implements ExchangeStartedWithStoragePayload {
  _messageType = "ExchangeStartedWithStorageMessage" as const;
  exchangeType?: unknown;
  storageMaxSlot?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeStartedWithStoragePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeStartedWithStorageMessage" as const;
    this._isInitialized = true;
  }
}
