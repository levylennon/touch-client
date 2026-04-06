/**
 * SelectedServerRefusedMessage — inferred from .on("SelectedServerRefusedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const SelectedServerRefusedEventName = "SelectedServerRefusedMessage" as const;

export interface SelectedServerRefusedPayload {
  [key: string]: unknown;
}

export class SelectedServerRefusedReceive implements SelectedServerRefusedPayload {
  _messageType = "SelectedServerRefusedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<SelectedServerRefusedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "SelectedServerRefusedMessage" as const;
    this._isInitialized = true;
  }
}
