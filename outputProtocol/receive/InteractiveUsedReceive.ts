/**
 * InteractiveUsedMessage — inferred from .on("InteractiveUsedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InteractiveUsedEventName = "InteractiveUsedMessage" as const;

export interface InteractiveUsedPayload {
  [key: string]: unknown;
}

export class InteractiveUsedReceive implements InteractiveUsedPayload {
  _messageType = "InteractiveUsedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<InteractiveUsedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InteractiveUsedMessage" as const;
    this._isInitialized = true;
  }
}
