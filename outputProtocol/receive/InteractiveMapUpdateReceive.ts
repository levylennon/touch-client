/**
 * InteractiveMapUpdateMessage — inferred from .on("InteractiveMapUpdateMessage", …) handlers in touch-client modules
 * Fields are partial (only properties read in those handlers).
 */

export const InteractiveMapUpdateEventName = "InteractiveMapUpdateMessage" as const;

export interface InteractiveMapUpdatePayload {
  interactiveElements?: unknown;
}

export class InteractiveMapUpdateReceive implements InteractiveMapUpdatePayload {
  _messageType = "InteractiveMapUpdateMessage" as const;
  interactiveElements?: unknown;
  _isInitialized = false;

  constructor(data: Partial<InteractiveMapUpdatePayload> = {}) {
    Object.assign(this, data);
    this._messageType = "InteractiveMapUpdateMessage" as const;
    this._isInitialized = true;
  }
}
