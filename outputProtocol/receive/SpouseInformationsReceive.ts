/**
 * SpouseInformationsMessage — inferred from .on("SpouseInformationsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SpouseInformationsEventName = "SpouseInformationsMessage" as const;

export interface SpouseInformationsPayload {
  spouse?: {
    sex?: unknown;
  };
}

export class SpouseInformationsReceive implements SpouseInformationsPayload {
  _messageType = "SpouseInformationsMessage" as const;
  spouse?: {
    sex?: unknown;
  };
  _isInitialized = false;

  constructor(data: Partial<SpouseInformationsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SpouseInformationsMessage" as const;
    this._isInitialized = true;
  }
}
