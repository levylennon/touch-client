/**
 * FMExchangeObjectAddedMessage — inferred from .on("FMExchangeObjectAddedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const FMExchangeObjectAddedEventName = "FMExchangeObjectAddedMessage" as const;

export interface FMExchangeObjectAddedPayload {
  [key: string]: unknown;
}

export class FMExchangeObjectAddedReceive implements FMExchangeObjectAddedPayload {
  _messageType = "FMExchangeObjectAddedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<FMExchangeObjectAddedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FMExchangeObjectAddedMessage" as const;
    this._isInitialized = true;
  }
}
