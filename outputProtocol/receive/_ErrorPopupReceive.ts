/**
 * _ErrorPopupMessage — inferred from .on("_ErrorPopupMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const _ErrorPopupEventName = "_ErrorPopupMessage" as const;

export interface _ErrorPopupPayload {
  text?: unknown;
  title?: unknown;
}

export class _ErrorPopupReceive implements _ErrorPopupPayload {
  _messageType = "_ErrorPopupMessage" as const;
  text?: unknown;
  title?: unknown;
  _isInitialized = false;

  constructor(data: Partial<_ErrorPopupPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "_ErrorPopupMessage" as const;
    this._isInitialized = true;
  }
}
