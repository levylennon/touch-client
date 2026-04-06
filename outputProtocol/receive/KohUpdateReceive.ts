/**
 * KohUpdateMessage — inferred from .on("KohUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const KohUpdateEventName = "KohUpdateMessage" as const;

export interface KohUpdatePayload {
  [key: string]: unknown;
}

export class KohUpdateReceive implements KohUpdatePayload {
  _messageType = "KohUpdateMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<KohUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "KohUpdateMessage" as const;
    this._isInitialized = true;
  }
}
