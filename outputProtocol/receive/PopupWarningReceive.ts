/**
 * PopupWarningMessage — inferred from .on("PopupWarningMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const PopupWarningEventName = "PopupWarningMessage" as const;

export interface PopupWarningPayload {
  author?: unknown;
  content?: unknown;
  lockDuration?: unknown;
}

export class PopupWarningReceive implements PopupWarningPayload {
  _messageType = "PopupWarningMessage" as const;
  author?: unknown;
  content?: unknown;
  lockDuration?: unknown;
  _isInitialized = false;

  constructor(data: Partial<PopupWarningPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "PopupWarningMessage" as const;
    this._isInitialized = true;
  }
}
