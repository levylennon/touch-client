/**
 * InteractiveUseErrorMessage — inferred from .on("InteractiveUseErrorMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InteractiveUseErrorEventName = "InteractiveUseErrorMessage" as const;

export interface InteractiveUseErrorPayload {
  [key: string]: unknown;
}

export class InteractiveUseErrorReceive implements InteractiveUseErrorPayload {
  _messageType = "InteractiveUseErrorMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<InteractiveUseErrorPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InteractiveUseErrorMessage" as const;
    this._isInitialized = true;
  }
}
