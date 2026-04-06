/**
 * ExchangeBidhouseMinimumItemPriceListMessage — inferred from .on("ExchangeBidhouseMinimumItemPriceListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ExchangeBidhouseMinimumItemPriceListEventName = "ExchangeBidhouseMinimumItemPriceListMessage" as const;

export interface ExchangeBidhouseMinimumItemPriceListPayload {
  objectGID?: unknown;
  prices?: unknown;
}

export class ExchangeBidhouseMinimumItemPriceListReceive implements ExchangeBidhouseMinimumItemPriceListPayload {
  _messageType = "ExchangeBidhouseMinimumItemPriceListMessage" as const;
  objectGID?: unknown;
  prices?: unknown;
  _isInitialized = false;

  constructor(data: Partial<ExchangeBidhouseMinimumItemPriceListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ExchangeBidhouseMinimumItemPriceListMessage" as const;
    this._isInitialized = true;
  }
}
