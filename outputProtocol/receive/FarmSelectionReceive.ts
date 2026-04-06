/**
 * FarmSelectionMessage — inferred from .on("FarmSelectionMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const FarmSelectionEventName = "FarmSelectionMessage" as const;

export interface FarmSelectionPayload {
  farmInstanceId?: unknown;
}

export class FarmSelectionReceive implements FarmSelectionPayload {
  _messageType = "FarmSelectionMessage" as const;
  farmInstanceId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<FarmSelectionPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "FarmSelectionMessage" as const;
    this._isInitialized = true;
  }
}
