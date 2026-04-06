/**
 * SelectedServerDataMessage — inferred from .on("SelectedServerDataMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SelectedServerDataEventName = "SelectedServerDataMessage" as const;

export interface SelectedServerDataPayload {
  serverId?: unknown;
}

export class SelectedServerDataReceive implements SelectedServerDataPayload {
  _messageType = "SelectedServerDataMessage" as const;
  serverId?: unknown;
  _isInitialized = false;

  constructor(data: Partial<SelectedServerDataPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SelectedServerDataMessage" as const;
    this._isInitialized = true;
  }
}
