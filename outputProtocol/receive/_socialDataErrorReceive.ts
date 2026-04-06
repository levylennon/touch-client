/**
 * _socialDataErrorMessage — inferred from .on("_socialDataErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const _socialDataErrorEventName = "_socialDataErrorMessage" as const;

export interface _socialDataErrorPayload {
  type?: unknown;
}

export class _socialDataErrorReceive implements _socialDataErrorPayload {
  _messageType = "_socialDataErrorMessage" as const;
  type?: unknown;
  _isInitialized = false;

  constructor(data: Partial<_socialDataErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "_socialDataErrorMessage" as const;
    this._isInitialized = true;
  }
}
