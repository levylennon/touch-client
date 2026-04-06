/**
 * KamasUpdateMessage — inferred from .on("KamasUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const KamasUpdateEventName = "KamasUpdateMessage" as const;

export interface KamasUpdatePayload {
  kamasTotal?: unknown;
}

export class KamasUpdateReceive implements KamasUpdatePayload {
  _messageType = "KamasUpdateMessage" as const;
  kamasTotal?: unknown;
  _isInitialized = false;

  constructor(data: Partial<KamasUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "KamasUpdateMessage" as const;
    this._isInitialized = true;
  }
}
