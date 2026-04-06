/**
 * InteractiveElementUpdatedMessage — inferred from .on("InteractiveElementUpdatedMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InteractiveElementUpdatedEventName = "InteractiveElementUpdatedMessage" as const;

export interface InteractiveElementUpdatedPayload {
  interactiveElement?: unknown;
}

export class InteractiveElementUpdatedReceive implements InteractiveElementUpdatedPayload {
  _messageType = "InteractiveElementUpdatedMessage" as const;
  interactiveElement?: unknown;
  _isInitialized = false;

  constructor(data: Partial<InteractiveElementUpdatedPayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InteractiveElementUpdatedMessage" as const;
    this._isInitialized = true;
  }
}
