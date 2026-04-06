/**
 * TaxCollectorMovementAddMessage — inferred from .on("TaxCollectorMovementAddMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TaxCollectorMovementAddEventName = "TaxCollectorMovementAddMessage" as const;

export interface TaxCollectorMovementAddPayload {
  informations?: unknown;
}

export class TaxCollectorMovementAddReceive implements TaxCollectorMovementAddPayload {
  _messageType = "TaxCollectorMovementAddMessage" as const;
  informations?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TaxCollectorMovementAddPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TaxCollectorMovementAddMessage" as const;
    this._isInitialized = true;
  }
}
