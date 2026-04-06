/**
 * OfflineOptionsMessage — inferred from .on("OfflineOptionsMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const OfflineOptionsEventName = "OfflineOptionsMessage" as const;

export interface OfflineOptionsPayload {
  options?: unknown;
}

export class OfflineOptionsReceive implements OfflineOptionsPayload {
  _messageType = "OfflineOptionsMessage" as const;
  options?: unknown;
  _isInitialized = false;

  constructor(data: Partial<OfflineOptionsPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "OfflineOptionsMessage" as const;
    this._isInitialized = true;
  }
}
