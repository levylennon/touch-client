/**
 * TowerOfAscensionCompositionMessage — inferred from .on("TowerOfAscensionCompositionMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TowerOfAscensionCompositionEventName = "TowerOfAscensionCompositionMessage" as const;

export interface TowerOfAscensionCompositionPayload {
  steps?: unknown;
}

export class TowerOfAscensionCompositionReceive implements TowerOfAscensionCompositionPayload {
  _messageType = "TowerOfAscensionCompositionMessage" as const;
  steps?: unknown;
  _isInitialized = false;

  constructor(data: Partial<TowerOfAscensionCompositionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TowerOfAscensionCompositionMessage" as const;
    this._isInitialized = true;
  }
}
