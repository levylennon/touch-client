/**
 * ObjectAveragePricesMessage — inferred from .on("ObjectAveragePricesMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const ObjectAveragePricesEventName = "ObjectAveragePricesMessage" as const;

export interface ObjectAveragePricesPayload {
  avgPrices?: unknown;
  ids?: {
    length?: unknown;
  };
}

export class ObjectAveragePricesReceive implements ObjectAveragePricesPayload {
  _messageType = "ObjectAveragePricesMessage" as const;
  avgPrices?: unknown;
  ids?: {
    length?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<ObjectAveragePricesPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "ObjectAveragePricesMessage" as const;
    this._isInitialized = true;
  }
}
