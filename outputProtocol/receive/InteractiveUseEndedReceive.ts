/**
 * InteractiveUseEndedMessage — inferred from .on("InteractiveUseEndedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InteractiveUseEndedEventName = "InteractiveUseEndedMessage" as const;

export interface InteractiveUseEndedPayload {
  [key: string]: unknown;
}

export class InteractiveUseEndedReceive implements InteractiveUseEndedPayload {
  _messageType = "InteractiveUseEndedMessage" as const;
  [key: string]: unknown;
  _isInitialized = false;

  constructor(data: Partial<InteractiveUseEndedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InteractiveUseEndedMessage" as const;
    this._isInitialized = true;
  }
}
