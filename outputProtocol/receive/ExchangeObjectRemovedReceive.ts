/**
 * ExchangeObjectRemovedMessage — inferred from .on("ExchangeObjectRemovedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeObjectRemovedEventName = "ExchangeObjectRemovedMessage" as const;

export interface ExchangeObjectRemovedPayload {
  [key: string]: unknown;
}

export class ExchangeObjectRemovedReceive implements ExchangeObjectRemovedPayload {
  _messageType = "ExchangeObjectRemovedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeObjectRemovedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeObjectRemovedMessage" as const;
    this._isInitialized = true;
  }
}
