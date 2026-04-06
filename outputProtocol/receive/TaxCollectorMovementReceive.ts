/**
 * TaxCollectorMovementMessage — inferred from .on("TaxCollectorMovementMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TaxCollectorMovementEventName = "TaxCollectorMovementMessage" as const;

export interface TaxCollectorMovementPayload {
  basicInfos?: unknown;
  hireOrFire?: unknown;
  playerName?: unknown;
}

export class TaxCollectorMovementReceive implements TaxCollectorMovementPayload {
  _messageType = "TaxCollectorMovementMessage" as const;
  basicInfos?: unknown;
  hireOrFire?: unknown;
  playerName?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TaxCollectorMovementPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TaxCollectorMovementMessage" as const;
    this._isInitialized = true;
  }
}
