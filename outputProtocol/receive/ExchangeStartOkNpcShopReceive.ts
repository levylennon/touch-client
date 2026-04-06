/**
 * ExchangeStartOkNpcShopMessage — inferred from .on("ExchangeStartOkNpcShopMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeStartOkNpcShopEventName = "ExchangeStartOkNpcShopMessage" as const;

export interface ExchangeStartOkNpcShopPayload {
  token?: unknown;
  tokenId?: unknown;
}

export class ExchangeStartOkNpcShopReceive implements ExchangeStartOkNpcShopPayload {
  _messageType = "ExchangeStartOkNpcShopMessage" as const;
  token?: unknown;
  tokenId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeStartOkNpcShopPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeStartOkNpcShopMessage" as const;
    this._isInitialized = true;
  }
}
