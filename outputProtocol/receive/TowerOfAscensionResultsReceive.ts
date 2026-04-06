/**
 * TowerOfAscensionResultsMessage — inferred from .on("TowerOfAscensionResultsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const TowerOfAscensionResultsEventName = "TowerOfAscensionResultsMessage" as const;

export interface TowerOfAscensionResultsPayload {
  stageLevel?: unknown;
  steps?: {
    forEach?: unknown;
  };
}

export class TowerOfAscensionResultsReceive implements TowerOfAscensionResultsPayload {
  _messageType = "TowerOfAscensionResultsMessage" as const;
  stageLevel?: unknown;
  steps?: {
    forEach?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<TowerOfAscensionResultsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "TowerOfAscensionResultsMessage" as const;
    this._isInitialized = true;
  }
}
