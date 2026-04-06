/**
 * TaxCollectorListMessage — inferred from .on("TaxCollectorListMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TaxCollectorListEventName = "TaxCollectorListMessage" as const;

export interface TaxCollectorListPayload {
  fightersInformations?: unknown;
  informations?: unknown;
  nbcollectorMax?: unknown;
}

export class TaxCollectorListReceive implements TaxCollectorListPayload {
  _messageType = "TaxCollectorListMessage" as const;
  fightersInformations?: unknown;
  informations?: unknown;
  nbcollectorMax?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TaxCollectorListPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TaxCollectorListMessage" as const;
    this._isInitialized = true;
  }
}
