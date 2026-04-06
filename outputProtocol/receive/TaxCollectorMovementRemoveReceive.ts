/**
 * TaxCollectorMovementRemoveMessage — inferred from .on("TaxCollectorMovementRemoveMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TaxCollectorMovementRemoveEventName = "TaxCollectorMovementRemoveMessage" as const;

export interface TaxCollectorMovementRemovePayload {
  collectorId?: unknown;
}

export class TaxCollectorMovementRemoveReceive implements TaxCollectorMovementRemovePayload {
  _messageType = "TaxCollectorMovementRemoveMessage" as const;
  collectorId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TaxCollectorMovementRemovePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TaxCollectorMovementRemoveMessage" as const;
    this._isInitialized = true;
  }
}
